import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  clearProductList,
  fetchProducts,
  setOffset,
} from "../../store/actions/productActions";

const ShopNavbarDropdown = () => {
  const categories = useSelector((state) => state.globalReducer.categories);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const dispatch = useDispatch();
  const handleShopClick = () => {
    dispatch(setOffset(0));
    dispatch(clearProductList([]));
    dispatch(fetchProducts());
  };

  const femaleCategories = categories.filter((c) => c.gender === "K");
  const maleCategories = categories.filter((c) => c.gender === "E");

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${isDropdownOpen ? "text-primary" : "text-secondtext"}`}>
        <NavLink
          to="/shop"
          exact
          onClick={handleShopClick}
          activeClassName="text-primary"
        >
          Shop
        </NavLink>
      </div>
      {isDropdownOpen && (
        <div className="absolute left-0 pt-2 space-y-2 z-10 rounded-xl">
          <div className="flex bg-white rounded-md shadow-lg">
            <div className="py-1">
              <div className="font-bold px-4 py-2">Kadın</div>
              {femaleCategories.map((category) => (
                <Link
                  to={`/shop/${category.id}/${
                    category.gender === "K" ? "Kadın" : "Erkek"
                  }/${category.title}`}
                  key={category.id}
                  className=" font-normal block px-4 py-2 m-1 text-sm rounded-lg hover:bg-lightgrey2"
                >
                  {category.title}
                </Link>
              ))}
            </div>
            <div className="py-1">
              <div className="font-bold px-4 py-2">Erkek</div>
              {maleCategories.map((category) => (
                <Link
                  to={`/shop/${category.id}/${
                    category.gender === "K" ? "Kadın" : "Erkek"
                  }/${category.title}`}
                  key={category.id}
                  className=" font-normal block px-4 py-2 m-1 text-sm rounded-lg hover:bg-lightgrey2"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShopNavbarDropdown;
