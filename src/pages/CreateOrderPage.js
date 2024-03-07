import React, { useEffect, useState } from "react";
import AddAddressModal from "../components/AddAddressModal";
import { useSelector } from "react-redux";
import axios from "axios";
import DeleteModal from "../components/DeleteModal";

const CreateOrderPage = () => {
  const { orderDetails } = useSelector((state) => state.shoppingCartReducer);

  const [addressList, setAddressList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAddressList();
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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteAddressId, setDeleteAddressId] = useState(null);

  const handleDeleteAddress = (addressId) => {
    setDeleteAddressId(addressId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAddress = () => {
    axios
      .delete(`http://localhost:8080/user/address/${deleteAddressId}`)
      .then((response) => {
        console.log("Address deleted successfully:", response.data);
        fetchAddressList();
        setIsDeleteModalOpen(false);
      })
      .catch((error) => {
        console.error("Error deleting address:", error);
        setIsDeleteModalOpen(false);
      });
  };

  const cancelDeleteAddress = () => {
    setDeleteAddressId(null);
    setIsDeleteModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //radio button functionss

  const [selectedSection, setSelectedSection] = useState("address");
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="px-48 my-8">
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
                    className={`mb-4 flex items-center p-3 rounded ${
                      selectedAddress === address ? "bg-lightgrey2" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id={`address-${index}`}
                      name="selectedAddress"
                      value={address.addressTitle}
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
                    <div>
                      <button
                        className="text-sm text-red-500 mr-2"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        Sil
                      </button>
                      <button
                        className="text-sm text-blue-500"
                        //onClick={() => handleEditAddress(address)}
                      >
                        Düzenle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleOpenModal}
                className="bg-blue-500 text-black py-2 px-4 rounded"
              >
                + Add New Address
              </button>
              <AddAddressModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                fetchAddressList={fetchAddressList}
              />
            </div>
          )}

          {selectedSection === "payment" && (
            <div className="border border-shineblack rounded p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Payment Information
              </h3>
            </div>
          )}
        </div>
        <div className="w-1/3">
          {orderDetails && (
            <div className="bg-lightgrey p-4 border border-lightgrey rounded shadow-md">
              <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
              <div className="flex justify-between mb-3">
                <span>Total Price:</span>
                <span>{orderDetails.totalProductPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping Cost:</span>
                <span>
                  {orderDetails.shippingCost === 0
                    ? "Free Shipping"
                    : `$ ${orderDetails.shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Discount:</span>
                <span>{orderDetails.discount.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-3">
                <span>Grand Total:</span>
                <span>$ {orderDetails.grandTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-md">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onConfirmDelete={confirmDeleteAddress}
        onCancelDelete={cancelDeleteAddress}
      />
    </div>
  );
};

export default CreateOrderPage;
