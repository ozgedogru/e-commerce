import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";
import PageButton from "../components/PageButton";

import shop1 from "../assets/shop/shop1.png";
import shop2 from "../assets/shop/shop2.png";
import shop3 from "../assets/shop/shop3.png";
import shop4 from "../assets/shop/shop4.png";
import shop5 from "../assets/shop/shop5.png";
import arrowright from "../assets/shop/arrowright.png";
import icongraph from "../assets/shop/icongraph.png";
import iconlist from "../assets/shop/iconlist.png";
import arrowdown from "../assets/shop/arrowdown.png";
import pro1 from "../assets/shop/pro1.png";
import pro2 from "../assets/shop/pro2.png";
import pro3 from "../assets/shop/pro3.png";
import pro4 from "../assets/shop/pro4.png";
import pro5 from "../assets/shop/pro5.png";
import pro6 from "../assets/shop/pro6.png";
import pro7 from "../assets/shop/pro7.png";
import pro8 from "../assets/shop/pro8.png";
import pro9 from "../assets/shop/pro9.png";
import pro10 from "../assets/shop/pro10.png";
import pro11 from "../assets/shop/pro11.png";
import pro12 from "../assets/shop/pro12.png";

const ProductListPage = () => {
  const shops = [shop1, shop2, shop3, shop4, shop5];
  const products = [
    pro1,
    pro2,
    pro3,
    pro4,
    pro5,
    pro6,
    pro7,
    pro8,
    pro9,
    pro10,
    pro11,
    pro12,
  ];

  return (
    <div>
      <div className="flex justify-center w-full bg-lightgrey">
        <div className="flex flex-col justify-center w-3/4 py-10">
          <div className="flex justify-between items-center py-4">
            <h2 className="flex text-black font-bold text-2xl leading-8">
              Shop
            </h2>
            <div className="flex gap-2 justify-end items-center">
              <p className="text-black font-bold leading-6">Home</p>
              <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
              <p className="text-pricegrey font-bold leading-6">Shop</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-4">
            <div className="flex justify-center gap-4">
              {shops.map((card, index) => (
                <div
                  key={index}
                  className="hover:opacity-75 transition duration-200 cursor-pointer"
                >
                  <div className="relative text-center">
                    <img src={card} alt="shop"></img>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base leading-6">
                      <h6>CLOTHS</h6>
                      <h6>5 Items</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-between w-3/4 py-10">
          <div className="flex justify-between">
            <div className="flex items-center">
              <label className="text-secondtext text-sm font-bold leading-6 tracking-wide">
                Showing all 12 results
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-secondtext text-sm font-bold leading-6 tracking-wide">
                Views:
              </label>
              <button className="border border-lightgrey2 rounded-md p-3">
                <img src={icongraph} alt="icon"></img>
              </button>
              <button className="border border-lightgrey2 rounded-md p-3">
                <img src={iconlist} alt="icon"></img>
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex px-5 py-[0.9rem] bg-lightgrey2 rounded-s-lg">
                <select className="text-secondtext bg-lightgrey2 text-sm leading-7">
                  <option>Popularity </option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                  <img
                    src={arrowdown}
                    className="absolute right-0 top-0 bottom-0 m-auto w-4 h-4 pointer-events-none"
                    alt="dropdown-arrow"
                  />
                </select>
              </div>
              <button className="flex px-5 py-3 justify-center items-center bg-primary hover:bg-shineblue text-white text-base font-bold leading-6 tracking-wider rounded-e-lg">
                Filter
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center py-16 gap-8">
            {products.map((image, index) => (
              <div className="flex flex-col py-4 gap-4">
                <ProductCard index={index} product={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <PageButton />
      </div>
      <div className="bg-lightgrey">
        <Clients />
      </div>
    </div>
  );
};

export default ProductListPage;
