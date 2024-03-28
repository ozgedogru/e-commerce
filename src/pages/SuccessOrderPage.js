import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SuccessOrderPage = () => {
  const { orderSuccess } = useSelector((state) => state.shoppingCartReducer);

  const [addressDetails, setAddressDetails] = useState(null);
  const [productDetails, setProductDetails] = useState([]);

  const fetchAddressDetails = (addressId) => {
    axios
      .get(`http://localhost:8080/user/address/${addressId}`)
      .then((response) => {
        console.log(response.data);
        setAddressDetails(response.data);
      })
      .catch((error) => {
        console.error("Error occured!", error);
      });
  };

  const fetchProductDetails = (productIds) => {
    Promise.all(
      productIds.map((productId) =>
        axios.get(`http://localhost:8080/products/${productId}`)
      )
    )
      .then((responses) => {
        const products = responses.map((response) => response.data);
        setProductDetails(products);
      })
      .catch((error) => {
        console.error("Error occurred!", error);
      });
  };

  const fetchOrderDetails = () => {
    fetchAddressDetails(orderSuccess.addressId);
    fetchProductDetails(orderSuccess.productIds);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const calculateEstimatedDeliveryDate = (orderDate) => {
    const estimatedDeliveryDateTime = new Date(orderDate);
    estimatedDeliveryDateTime.setDate(estimatedDeliveryDateTime.getDate() + 7);

    const options = { day: "numeric", month: "long", year: "numeric" };
    return estimatedDeliveryDateTime.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col items-center justify-start my-16">
      <h2 className="text-3xl font-semibold mb-4">Order Successful!</h2>
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
              {orderSuccess.price.toFixed()} $
            </h6>
          </div>
          <div className="flex flex-col gap-4 border p-4 m-4 rounded-lg w-max">
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
