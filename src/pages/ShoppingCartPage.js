import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeThisProduct,
  setOrderSummary,
  toggleProduct,
} from "../store/actions/shoppingCartActions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ShoppingCartPage = () => {
  const { cart } = useSelector((state) => state.shoppingCartReducer);

  const totalProductCount = cart.reduce((total, item) => {
    if (item.checked) {
      return total + item.count;
    }
    return total;
  }, 0);

  const totalProductPrice = cart.reduce((total, item) => {
    if (item.checked) {
      return total + item.count * item.product.price;
    }
    return total;
  }, 0);

  let shippingCost = 10;
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setdiscountAmount] = useState(0);
  const [invalidDiscountMessage, setInvalidDiscountMessage] = useState("");

  const applyDiscountCode = () => {
    if (discountCode.toUpperCase() === "HELLO10") {
      setdiscountAmount(10);
      setInvalidDiscountMessage("");
    } else {
      setInvalidDiscountMessage("Invalid discount code!");
    }
  };

  const discountPercentage = totalProductCount >= 3 ? 10 : 0;
  const discount =
    (totalProductPrice * discountPercentage) / 100 + discountAmount;

  const grandTotal = totalProductPrice + shippingCost - discount;

  if (totalProductCount > 3) {
    shippingCost = 0;
  }

  const dispatch = useDispatch();

  const increment = (item) => {
    dispatch(addToCart(item.product, 1));
  };
  const decrement = (id) => {
    dispatch(removeFromCart(id));
  };
  const remeoveProduct = (id) => {
    dispatch(removeThisProduct(id));
  };
  const toggleProductSelection = (productId, isChecked) => {
    dispatch(toggleProduct(productId));
  };

  const history = useHistory();

  const handleOrderDetail = () => {
    const orderSum = {
      totalProductPrice: totalProductPrice,
      discount: discount,
      shippingCost: shippingCost,
      grandTotal: grandTotal,
    };

    dispatch(setOrderSummary(orderSum));

    history.push("/order");
  };

  useEffect(() => {
    console.log("cart > ", cart);
  }, [cart]);

  return (
    <div className="mx-auto my-8 py-8 px-48">
      <div className="flex w-full">
        <div className="w-2/3">
          <h3 className="flex text-xl text-center font-semibold mb-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 text-2xl ml-[24rem]">
                <p>Your cart is currently empty.</p>
                <Link
                  to="/shop"
                  className="flex px-5 py-2 justify-center rounded-3xl bg-white hover:bg-shineblue hover:text-white text-primary border border-solid text-sm"
                >
                  Discover What's New
                </Link>
              </div>
            ) : (
              <p>Sepetim ({totalProductCount} ürün)</p>
            )}
          </h3>
          {cart.map((item) => (
            <div
              key={item.product.id}
              className={`flex items-center mb-4 p-2 pr-12 border border-lightgrey2 rounded shadow-md ${
                !item.checked ? "opacity-50" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) =>
                  toggleProductSelection(item.product.id, e.target.checked)
                }
                className={`h-3 w-3 mx-4 appearance-none cursor-pointer rounded-md border-2 focus:outline-none ${
                  item.checked
                    ? "bg-black border-black"
                    : "bg-pricegrey border-pricegrey"
                }`}
              />
              {item.checked && (
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M6 13l4 4 10-10"></path>
                </svg>
              )}
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-20 object-cover rounded"
              />
              <div className="flex items-center w-full">
                <div className="ml-4 w-2/5">
                  <p className="text-lg font-semibold">{item.product.name}</p>
                  <p>Adet: {item.count}</p>
                  <p className="text-xs inline-flex items-center gap-2">
                    <i className="fa-solid fa-truck-fast"></i>
                    En geç yarın kargoda!
                  </p>
                </div>
                <div className="flex grow">
                  <button
                    onClick={() => decrement(item.product.id)}
                    disabled={item.count === 1}
                    className={`bg-darkbutton text-white text-sm w-6 py-1 rounded-s ${
                      item.count === 1 ? "opacity-40" : ""
                    }`}
                  >
                    -
                  </button>
                  <p className="px-2 py-1">{item.count}</p>
                  <button
                    onClick={() => increment(item)}
                    className="bg-darkbutton text-white text-sm w-6 py-1 rounded-e"
                  >
                    +
                  </button>
                </div>
                <div className="flex grow">
                  <p className=" font-semibold">
                    $ {Number((item.count * item.product.price).toFixed(2))}
                  </p>
                </div>
                <div className="flex">
                  <button onClick={() => remeoveProduct(item.product.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalProductCount > 0 ? (
          <div className="w-1/3 ml-8">
            <div className="bg-lightgrey p-4 border border-lightgrey rounded shadow-md">
              <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
              <div className="flex justify-between mb-3">
                <span>Total Quantity:</span>
                <span>{totalProductCount}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Total Price:</span>
                <span>$ {totalProductPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className={shippingCost === 0 ? "line-through" : ""}>
                  Shipping Cost:
                </span>
                <span className={shippingCost === 0 ? "text-orange" : ""}>
                  {shippingCost === 0
                    ? "Free Shipping"
                    : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>$ {discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                {grandTotal > 1000 ? (
                  <span className="text-primary text-xs">
                    10% discount on purchases over $1000!
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div>
                {discountAmount > 0 ? (
                  <span className="text-primary text-xs">
                    Additional discount of ${discountAmount} applied with code
                    HELLO10!
                  </span>
                ) : (
                  ""
                )}
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold my-4">
                <span>Grand Total:</span>
                <span>$ {grandTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handleOrderDetail}
                className="w-full bg-primary text-white py-2 rounded-md"
              >
                Proceed to Payment
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-8 mx-2">
                <input
                  type="text"
                  placeholder="Enter Discount Code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="border p-2 rounded-l-md w-3/4 "
                />
                <button
                  onClick={() => applyDiscountCode()}
                  className="bg-primary text-white p-2 rounded-r-md w-1/4"
                >
                  Apply
                </button>
              </div>
              <div className="mx-2 text-red">
                {invalidDiscountMessage && (
                  <span className="text-red-500 text-xs">
                    {invalidDiscountMessage}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
