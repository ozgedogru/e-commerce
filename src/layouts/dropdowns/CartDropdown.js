import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../store/actions/shoppingCartActions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.shoppingCartReducer);
  const [isHovered, setIsHovered] = useState(false);

  const totalProductCount = cart.reduce((total, item) => {
    if (item.checked) {
      return total + item.count;
    }
    return total;
  }, 0);
  const increment = (item) => {
    dispatch(addToCart(item.product, 1));
  };
  const decrement = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Popover className="relative inline-block">
      <Popover.Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-black rounded-md"
      >
        <div className="flex items-center text-primary px-2 gap-1">
          <i className="fa-solid fa-cart-shopping"></i>({totalProductCount})
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        show={isHovered}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute z-10 text-center right-0 w-72 bg-white border border-lightgrey2 rounded-md shadow-lg"
        >
          <div className="flex flex-col gap-2 p-2 px-4">
            <div>
              <p className="text-start text-black ml-2 mb-2">
                Sepetim ({totalProductCount} urun)
              </p>
            </div>
            {cart.map((item) => (
              <div key={item.product.id} className="flex items-center mb-4">
                <img
                  src={
                    // item.product.images &&
                    // item.product.images[0] &&
                    item.product.image
                  }
                  alt={item.product.name}
                  className="object-cover h-16 rounded-md mr-2"
                />
                <div className="flex flex-col mx-4 items-start gap-2 w-full text-sm text-black">
                  <p>{item.product.name}</p>
                  <div className="flex w-full justify-between">
                    <p className="flex">
                      $ {Number((item.count * item.product.price).toFixed(2))}
                    </p>
                    <div className="flex justify-evenly">
                      <button
                        onClick={() => decrement(item.product.id)}
                        className="bg-lightgrey2 text-black text-sm w-4 rounded-s"
                      >
                        -
                      </button>
                      <p className="px-2">{item.count}</p>
                      <button
                        onClick={() => increment(item)}
                        className="bg-lightgrey2 text-black text-sm w-4 rounded-e"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-evenly">
              <button className="bg-black text-white text-sm rounded p-1 px-2">
                <Link to="/cart">Sepete Git</Link>
              </button>
              <button className="bg-black text-white text-sm rounded p-1 px-2">
                Siparisi Tamamla
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default CartDropdown;
