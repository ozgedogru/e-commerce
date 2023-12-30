import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogout } from "../store/actions/userActions";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ShopNavbarDropdown from "./dropdowns/ShopNavbarDropdown";

const Header = () => {
  const { user, isLoggedIn } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(userLogout());
    history.push("/");
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="hidden sm:flex justify-between items-center min-h-14 bg-black text-white">
        <div className="flex flex-wrap justify-between items-center font-bold w-full px-48">
          <div className="flex items-center py-2.5 gap-[0.3rem]">
            <div className="flex pr-2.5 gap-1 items-center">
              <i className="fa-solid fa-phone"></i>
              <p>(225) 555-0118</p>
            </div>
            <div className="flex p-2.5 gap-1 items-center">
              <i className="fa-solid fa-envelope"></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center p-2.5 pl-0 gap-2.5">
            <p>Follow Us :</p>
            <i className="fa-brands fa-instagram p-1"></i>
            <i className="fa-brands fa-youtube p-1"></i>
            <i className="fa-brands fa-facebook p-1"></i>
            <i className="fa-brands fa-square-x-twitter p-1"></i>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center min-h-14">
        <div className="flex flex-wrap justify-between items-center font-bold w-full px-48">
          <div className="flex pr-4 text-2xl font-bold leading-8">
            <h3>BrandName</h3>
          </div>
          <div className="flex flex-wrap-reverse justify-between grow items-center p-0.5">
            <nav className="flex flex-wrap">
              <ul className="flex items-center text-secondtext font-bold text-base leading-6 tracking-wide gap-4">
                <li>
                  <NavLink to="/" exact activeClassName="text-primary">
                    Home
                  </NavLink>
                </li>
                <li>
                  <ShopNavbarDropdown />
                </li>
                <li>
                  <NavLink to="/about" activeClassName="text-primary">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" activeClassName="text-primary">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="text-primary">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages" activeClassName="text-primary">
                    Pages
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="flex items-center text-primary py-4 font-bold">
              {isLoggedIn ? (
                <div className="flex flex-wrap items-center px-2 gap-1">
                  <Gravatar
                    email={user.email}
                    className="w-5 h-5 rounded-full"
                  />
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
              <div className="flex items-center px-2 gap-1">
                <i className="fa-solid fa-search"></i>
                <p></p>
              </div>
              <div className="flex items-center px-2 gap-1">
                <i className="fa-solid fa-cart-shopping"></i>
                <p></p>
              </div>
              <div className="flex items-center px-2 gap-1">
                <i className="fa-regular fa-heart"></i>
                <p></p>
              </div>
              <div>
                {user.name ? (
                  <div className="flex items-center px-2 gap-1">
                    <p>
                      <button onClick={() => handleLogout()}>Logout</button>
                    </p>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col">
        <div className="flex justify-between items-center py-8 px-4">
          <h3 className="font-bold text-2xl">BrandName</h3>
          <div className="flex items-center text-black font-bold">
            <div className="flex items-center p-2">
              <i className="fa-solid fa-search"></i>
              <p></p>
            </div>
            <div className="flex items-center p-2">
              <i className="fa-solid fa-cart-shopping"></i>
              <p></p>
            </div>
            <div className="flex items-center p-2">
              <i className="fa-solid fa-bars"></i>
              <p></p>
            </div>
            {isLoggedIn ? (
              <div className="flex items-center p-2">
                <button onClick={() => handleLogout()}>
                  <i className="fa-solid fa-power-off"></i>
                </button>
              </div>
            ) : (
              <div className="flex items-center p-2">
                <Link to="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex flex-col items-center text-secondtext text-2xl leading-6 tracking-wide gap-8 py-8">
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" exact>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/pages">Pages</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
