import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AddAddressModal from "./AddAddressModal";
import DeleteModal from "./DeleteModal";
import AddPaymentModal from "./AddPaymentModal";
import {
  clearCart,
  setAddress,
  setOrderSuccess,
  setOrderSummary,
  setPayment,
} from "../../store/actions/shoppingCartActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateOrderPage = () => {
  const { orderSum, cart } = useSelector((state) => state.shoppingCartReducer);

  const [addressList, setAddressList] = useState([]);
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const [paymentList, setPaymentList] = useState([]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentToEdit, setPaymentToEdit] = useState(null);

  useEffect(() => {
    fetchAddressList();
    fetchPaymentList();
  }, []);

  //address listesini getir
  const fetchAddressList = () => {
    axios
      .get("http://localhost:8080/user/1/addresses")
      .then((response) => {
        setAddressList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error occured!", error);
      });
  };
  //card bilgilerini getir
  const fetchPaymentList = () => {
    axios
      .get("http://localhost:8080/user/1/payments")
      .then((response) => {
        setPaymentList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error occured!", error);
      });
  };

  ////////////////////////////////Confirm Delete///////////////////////////////////

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const handleDeleteItem = (itemId, itemType) => {
    if (itemType === "address") {
      axios
        .delete(`http://localhost:8080/user/address/${itemId}`)
        .then((response) => {
          console.log("Address deleted successfully:", response.data);
          fetchAddressList();
          setIsDeleteModalOpen(false);
        })
        .catch((error) => {
          console.error("Error deleting address:", error);
          setIsDeleteModalOpen(false);
        });
    } else if (itemType === "payment") {
      axios
        .delete(`http://localhost:8080/user/payments/${itemId}`)
        .then((response) => {
          console.log("Payment deleted successfully:", response.data);
          fetchPaymentList();
          setIsDeleteModalOpen(false);
        })
        .catch((error) => {
          console.error("Error deleting payment:", error);
          setIsDeleteModalOpen(false);
        });
    }
  };

  const confirmDelete = (itemId) => {
    setIsDeleteModalOpen(true);
    setDeleteItemId(itemId);
  };

  const cancelDeleteItem = () => {
    setDeleteItemId(null);
    setIsDeleteModalOpen(false);
  };

  /////////////////////////////////////////////////////////////////////////////////

  const handleOpenModal = (type) => {
    if (type === "address") {
      setAddressModalOpen(true);
      setAddressToEdit(null);
    } else {
      setPaymentModalOpen(true);
      setPaymentToEdit(null);
    }
  };
  const handleCloseModal = (type) => {
    if (type === "address") {
      setAddressModalOpen(false);
      setAddressToEdit(null);
    } else {
      setPaymentModalOpen(false);
      setPaymentToEdit(null);
    }
  };

  const handleEditAddress = (type, editItem) => {
    if (type === "address") {
      setAddressModalOpen(true);
      setAddressToEdit(editItem);
    } else {
      setPaymentModalOpen(true);
      setPaymentToEdit(editItem);
    }
  };

  //radio button functionss

  const dispatch = useDispatch();

  const [selectedSection, setSelectedSection] = useState("address");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  const handleSelectAddress = (address) => {
    console.log("address > ", address);

    setSelectedAddress(address);
    dispatch(setAddress(address));
  };

  const handleSelectPayment = (payment) => {
    console.log("payment > ", payment);

    setSelectedPayment(payment);
    dispatch(setPayment(payment));
  };

  // useEffect(() => {
  //   if (addressList.length > 0) {
  //     setSelectedAddress(addressList[0]);
  //   }
  // }, [addressList]);

  // useEffect(() => {
  //   if (paymentList.length > 0) {
  //     setSelectedPayment(paymentList[0]);
  //   }
  // }, [paymentList]);

  ///////////////////////////////////////////////////////////////////

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const productIds = cart.map((ind) => {
    return { id: ind.product.id };
  });

  const createOrder = () => {
    if (!selectedAddress || !selectedPayment) {
      console.error("Address and payment information must be selected.");
      toast.error("Address and payment information must be selected.");

      return;
    }

    setLoading(true);

    const newOrder = {
      orderDate: new Date(),
      cardHolderName: selectedPayment.cardHolder,
      cardNumber: selectedPayment.cardNumber,
      expirationDate: selectedPayment.expirationDate,
      price: orderSum.grandTotal,
      address: selectedAddress,
      products: productIds,
      user: {
        id: 1,
      },
    };

    console.log("new order > ", newOrder);

    setTimeout(() => {
      axios
        .post("http://localhost:8080/user/1/orders", newOrder)
        .then((response) => {
          console.log("Order created successfully:", response.data);

          dispatch(setAddress(null));
          dispatch(setPayment(null));
          dispatch(clearCart(null));
          dispatch(setOrderSummary(null));

          dispatch(setOrderSuccess(response.data));

          toast.success("Siparis olusturuldu!");
          history.push("/success");

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error occurred while creating order:", error);
          setLoading(false);
        });
    }, 1000);
  };

  return (
    <div className={`px-48 my-8 ${loading ? "dimmed" : ""}`}>
      {loading && (
        <div className="loading-overlay">
          <p>Loading...</p>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-8">Review Your Order</h2>
      <div className="flex">
        <div className="w-2/3 pr-8">
          <div className="flex mb-8">
            <div
              onClick={() => handleSelectSection("address")}
              className={`flex-grow p-4 text-center cursor-pointer rounded ${
                selectedSection === "address" ? "text-white bg-black" : ""
              }`}
            >
              <h3>Address Information</h3>
              {selectedAddress && (
                <div className="text-xs w-full">
                  <h4>{selectedAddress.addressTitle}</h4>
                  <p>
                    {selectedAddress.city}, {selectedAddress.district}
                  </p>
                </div>
              )}
            </div>

            <div
              onClick={() => handleSelectSection("payment")}
              className={`flex-grow p-4 text-center cursor-pointer rounded ${
                selectedSection === "payment" ? "text-white bg-black" : ""
              }`}
            >
              Payment Information
            </div>
          </div>
          {selectedSection === "address" && (
            <div className="border border-shineblack rounded p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Addresses</h3>
              <div className="grid grid-cols-2 gap-4">
                {addressList?.map((address, index) => (
                  <div
                    key={index}
                    className={`mb-4 grid grid-cols-1 p-3 rounded ${
                      selectedAddress === address ? "bg-lightgrey2" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`address-${index}`}
                        name="selectedAddress"
                        value={address.addressTitle}
                        checked={selectedAddress === address}
                        onChange={() => handleSelectAddress(address)}
                        className="mr-2"
                      />
                      <label htmlFor={`address-${index}`} className="flex-grow">
                        <div>
                          <h4 className="text-base font-semibold">
                            {address.addressTitle}
                          </h4>
                          <p className="text-sm">
                            {address.city}, {address.district}
                          </p>
                          <p className="text-sm">{address.neighborhood}</p>
                          <p className="text-sm">{address.address}</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        className="text-sm mr-2"
                        onClick={() => handleEditAddress("address", address)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-sm"
                        onClick={() => confirmDelete(address.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleOpenModal("address")}
                className="border py-2 px-4 rounded hover:bg-black hover:text-white"
              >
                + Add New Address
              </button>
              <AddAddressModal
                isOpen={addressModalOpen}
                onClose={() => handleCloseModal("address")}
                fetchAddressList={fetchAddressList}
                addressToEdit={addressToEdit}
              />
              <DeleteModal
                isOpen={isDeleteModalOpen}
                onConfirmDelete={() =>
                  handleDeleteItem(deleteItemId, selectedSection)
                }
                onCancelDelete={cancelDeleteItem}
                itemType={selectedSection}
              />
            </div>
          )}

          {selectedSection === "payment" && (
            <div className="border border-shineblack rounded p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Payment Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {paymentList?.map((payment, index) => (
                  <div
                    key={index}
                    className={`mb-4 grid grid-cols-1 p-4 rounded ${
                      selectedPayment === payment ? "bg-lightgrey2" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`payment-${index}`}
                        name="selectedPayment"
                        value={payment.cardNumber}
                        checked={selectedPayment === payment}
                        onChange={() => handleSelectPayment(payment)}
                        className="mr-4"
                      />
                      <label htmlFor={`payment-${index}`} className="flex-grow">
                        <h4 className="text-lg font-semibold mb-2">
                          {payment.cardHolder}
                        </h4>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-sm font-semibold">
                              Card Number:
                            </p>
                            <p className="text-sm">{payment.cardNumber}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">
                              Expiration Date:
                            </p>
                            <p className="text-sm">{payment.expirationDate}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">Type:</p>
                            <p className="text-sm">{payment.type}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="text-sm mr-2"
                        onClick={() => handleEditAddress("payment", payment)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-sm"
                        onClick={() => confirmDelete(payment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleOpenModal("payment")}
                className="border mt-2 py-2 px-4 rounded hover:bg-black hover:text-white"
              >
                Add New Payment Method
              </button>
              <AddPaymentModal
                isOpen={paymentModalOpen}
                onClose={() => handleCloseModal("payment")}
                fetchPaymentList={fetchPaymentList}
                paymentToEdit={paymentToEdit}
              />
              <DeleteModal
                isOpen={isDeleteModalOpen}
                onConfirmDelete={() =>
                  handleDeleteItem(deleteItemId, selectedSection)
                }
                onCancelDelete={cancelDeleteItem}
                itemType={selectedSection}
              />
            </div>
          )}
        </div>
        <div className="w-1/3">
          {orderSum && (
            <div className="bg-lightgrey p-4 border border-lightgrey rounded shadow-md">
              <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
              <div className="flex justify-between mb-3">
                <span>Total Price:</span>
                <span>{orderSum.totalProductPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping Cost:</span>
                <span>
                  {orderSum.shippingCost === 0
                    ? "Free Shipping"
                    : `$ ${orderSum.shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Discount:</span>
                <span>{orderSum.discount.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-3">
                <span>Grand Total:</span>
                <span>$ {orderSum.grandTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => createOrder()}
                className={`w-full bg-primary text-white py-2 rounded-md ${
                  !selectedAddress || !selectedPayment
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={!selectedAddress || !selectedPayment}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
