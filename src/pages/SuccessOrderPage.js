import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { AxiosInstance } from "../api/axiosInstance";

const SuccessOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const fetchOrderDetails = () => {
      AxiosInstance.get(`/user/orders/${orderId}`)
        .then((response) => {
          console.log("order: ", response.data);
          setOrderDetails(response.data);
        })
        .catch((error) => {
          console.error("Error occured!", error);
        });
    };

    fetchOrderDetails();
  }, [orderId]);

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
      {orderDetails && (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 m-4 w-max">
            <h6>
              <strong>Estimated delivery date: </strong>
              {calculateEstimatedDeliveryDate(orderDetails.orderDate)}
            </h6>
            <h6>
              <strong>Shipping address: </strong>{" "}
              {orderDetails.address.addressTitle} -{" "}
              {orderDetails.address.district} / {orderDetails.address.city}
            </h6>
            <h6>
              <strong>Total price: </strong>
              {orderDetails.price.toFixed(2)} $
            </h6>
          </div>
          <div className="flex flex-col gap-4 shadow-lg border border-lightgrey2 bg-white p-4 m-4 rounded-lg w-max">
            {orderDetails.products.map((product, index) => (
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
