import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AxiosInstance } from "../api/axiosInstance";

const SuccessOrderPage = () => {
  const { orderSuccess } = useSelector((state) => state.shoppingCartReducer);

  const [addressDetails, setAddressDetails] = useState(null);
  const [productDetails, setProductDetails] = useState([]);

  const fetchAddressDetails = () => {
    AxiosInstance.get("/user/addresses")
      .then((response) => {
        console.log("Addresses: ", response.data);
        setAddressDetails(response.data);
      })
      .catch((error) => {
        console.error("Error occured!", error);
      });
  };

  const fetchProductDetails = (products) => {
    Promise.all(
      products.map((product) =>
        axios.get(`http://localhost:8080/products/${product.id}`)
      )
    )
      .then((responses) => {
        const productDetails = responses.map((response) => response.data);
        setProductDetails(productDetails);
      })
      .catch((error) => {
        console.error("Error occurred!", error);
      });
  };

  useEffect(() => {
    const fetchOrderDetails = () => {
      fetchAddressDetails(orderSuccess.address.id);
      fetchProductDetails(orderSuccess.products);
    };

    fetchOrderDetails();

    console.log("order success > ", orderSuccess);
  }, [orderSuccess]);

  const calculateEstimatedDeliveryDate = (orderDate) => {
    const estimatedDeliveryDateTime = new Date(orderDate);
    estimatedDeliveryDateTime.setDate(estimatedDeliveryDateTime.getDate() + 7);

    const options = { day: "numeric", month: "long", year: "numeric" };
    return estimatedDeliveryDateTime.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col items-center justify-start mt-8 pt-8 bg-lightgrey">
      <h2 className="text-3xl text-pricegreen font-semibold mb-4">
        Order Successful!
      </h2>
      <p className="text-lg mb-8">
        Thank you for your order. Your order has been successfully placed.
      </p>
      {addressDetails && productDetails && (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 m-4 w-max">
            <h6>
              <strong>Estimated delivery date: </strong>
              {calculateEstimatedDeliveryDate(orderSuccess.orderDate)}
            </h6>
            <h6>
              <strong>Shipping address: </strong> {addressDetails.addressTitle}{" "}
              - {addressDetails.district} / {addressDetails.city}
            </h6>
            <h6>
              <strong>Total price: </strong>
              {orderSuccess.price.toFixed(2)} $
            </h6>
          </div>
          <div className="flex flex-col gap-4 shadow-lg border border-lightgrey2 bg-white p-4 m-4 rounded-lg w-max">
            {productDetails.map((product, index) => (
              <div key={index} className="flex gap-2">
                <div>
                  <img
                    className="w-16 h-full rounded object-cover"
                    src={product.image}
                    alt={`orderImg${index}`}
                  />
                </div>
                <div className="flex flex-col ">
                  <h5 className="text-black font-bold ">{product.name}</h5>
                  <h6>{product.price} $</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Link to="/" className="btn-primary my-8">
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessOrderPage;
