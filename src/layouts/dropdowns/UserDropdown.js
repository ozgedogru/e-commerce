import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";

const UserDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { isLoggedIn, user } = useSelector((state) => state.userReducer);

  return (
    <Popover className="relative inline-block">
      <Popover.Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-black rounded-md"
      >
        {isLoggedIn ? (
          <div className="flex flex-wrap items-center px-2 gap-1">
            <Gravatar email={user.email} className="w-5 h-5 rounded-full" />
            <p>{user.name}</p>
          </div>
        ) : (
          <div className="flex flex-wrap items-center px-2 gap-1">
            <i className="fa-regular fa-user"></i>
            <button>
              <Link to="/login">Login / Register</Link>
            </button>
          </div>
        )}
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
          className="absolute z-10 text-center top-6 right-0 w-max bg-white border border-lightgrey2 rounded-md shadow-lg"
        >
          <div className="flex flex-col items-start gap-1 py-2 px-4">
            <button className="text-black text-md rounded p-1 py-0 hover:text-shineblack">
              <Link to="/">User Information</Link>
            </button>
            <button className="text-black text-md rounded p-1 py-0 hover:text-shineblack">
              <Link to="/previous-orders">All Orders</Link>
            </button>
            <button className="text-black text-md rounded p-1 py-0 hover:text-shineblack">
              <Link to="/reviews">Reviews</Link>
            </button>
            <button className="text-black text-md rounded p-1 py-0 hover:text-shineblack">
              <Link to="/discount-coupons">Discount Coupons</Link>
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default UserDropdown;
