import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deselectProduct,
  removeFromCart,
  removeThisProduct,
  selectProduct,
} from "../store/actions/shoppingCartActions";

const ShoppingCartPage = () => {
  const { cart } = useSelector((state) => state.shoppingCartReducer);
  const totalProductCount = cart.reduce((total, item) => total + item.count, 0);

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
    if (isChecked) {
      dispatch(selectProduct(productId));
    } else {
      dispatch(deselectProduct(productId));
    }
  };

  return (
    <div className="mx-auto my-8 py-8 px-48">
      <h3 className="text-xl text-center font-semibold mb-4">
        {totalProductCount === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <p>Your cart is currently empty.</p>
            <button className="flex px-5 py-2 justify-center rounded-3xl bg-white hover:bg-shineblue hover:text-white text-primary border border-solid text-sm">
              Discover What's New
            </button>
          </div>
        ) : (
          <p className="text-end">Sepetim ({totalProductCount} ürün)</p>
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
            src={item.product.images[0].url}
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
  );
};

export default ShoppingCartPage;
