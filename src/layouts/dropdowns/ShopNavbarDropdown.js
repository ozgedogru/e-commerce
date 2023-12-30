import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ShopNavbarDropdown = () => {
  const categories = useSelector((state) => state.globalReducer.categories);
  console.log("categories", categories);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const femaleCategories = categories.filter((c) => c.gender === "k");
  const maleCategories = categories.filter((c) => c.gender === "e");

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${isDropdownOpen ? "text-primary" : "text-secondtext"}`}>
        <NavLink to="/shop" exact activeClassName="text-primary">
          Shop
        </NavLink>
      </div>
      {isDropdownOpen && (
        <div className="absolute left-0 pt-2 space-y-2 z-10 rounded-xl">
          <div className="flex bg-white rounded-md shadow-lg">
            <div className="py-1">
              <div className="font-bold px-4 py-2">Kadın</div>
              {femaleCategories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/shopping/Kadin/${category.title}`}
                  className=" font-normal block px-4 py-2 m-1 text-sm rounded-lg hover:bg-lightgrey2"
                >
                  {category.title}
                </NavLink>
              ))}
            </div>
            <div className="py-1">
              <div className="font-bold px-4 py-2">Erkek</div>
              {maleCategories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/shopping/Erkek${category.title}`}
                  className=" font-normal block px-4 py-2 m-1 text-sm rounded-lg hover:bg-lightgrey2"
                >
                  {category.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShopNavbarDropdown;
