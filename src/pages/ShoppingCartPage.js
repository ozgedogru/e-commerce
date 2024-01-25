import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeThisProduct,
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
          className="flex items-center mb-4 p-2 pr-12 border border-lightgrey2 rounded shadow-md"
        >
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
