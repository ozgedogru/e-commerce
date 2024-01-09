import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";

import arrowright from "../assets/shop/arrowright.png";
import icongraph from "../assets/shop/icongraph.png";
import iconlist from "../assets/shop/iconlist.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductList,
  fetchProducts,
  setOffset,
} from "../store/actions/productActions";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTopButton from "../components/ScrollToTopButton";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const { productList, totalProductCount, fetchState, offset } = useSelector(
    (state) => state.productReducer
  );
  const limit = 10;

  const handleFilterButtonClick = (e) => {
    e.preventDefault();
    dispatch(setOffset(0));
    dispatch(clearProductList([]));
    dispatch(fetchProducts(category, filter, sort, limit, 0));
  };

  const loadMore = () => {
    const newOffset = offset + limit;
    dispatch(setOffset(newOffset));
    dispatch(fetchProducts(category, filter, sort, limit, newOffset));
  };

  const categories = useSelector((state) => state.globalReducer.categories);
  const firstFiveCategories = categories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const noProductsFound =
    fetchState === "FETCHED" &&
    totalProductCount === 0 &&
    productList.length === 0;

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full sm:px-48 px-10 gap-10 py-10 bg-lightgrey">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
          <h2 className="flex justify-center text-black font-bold text-2xl leading-8">
            Shop
          </h2>
          <div className="flex gap-2 justify-center sm:justify-end items-center">
            <a href="/" className="text-black font-bold leading-6">
              Home
            </a>
            <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
            <p className="text-pricegrey font-bold leading-6">Shop</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:w-full h-auto justify-center gap-8">
          {firstFiveCategories.map((category) => (
            <div
              key={category.id}
              className="w-full hover:opacity-75 transition duration-200 cursor-pointer"
            >
              <div className="relative text-center w-full h-full">
                <img
                  className="w-full h-full object-cover sm:w-80"
                  src={category.img}
                  alt={category.title}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base leading-6">
                  <h6>{category.gender === "k" ? "Kadin" : "Erkek"}</h6>
                  <h6>{category.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col sm:flex-row gap-8 justify-between items-center sm:px-48 py-4">
            <div className="flex items-center">
              <label className="text-secondtext text-sm font-bold leading-6">
                Showing all {totalProductCount} results
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-secondtext text-sm font-bold leading-6">
                Views:
              </label>
              <button className="border border-lightgrey2 rounded-md p-3">
                <img src={icongraph} alt="icon"></img>
              </button>
              <button className="border border-lightgrey2 rounded-md p-3">
                <img src={iconlist} alt="icon"></img>
              </button>
            </div>
            <div className="flex items-center text-sm leading-7">
              <form
                onSubmit={handleFilterButtonClick}
                className="flex flex-col flex-wrap sm:flex-row gap-2"
              >
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search..."
                  className="mr-2 px-2 py-1 border border-pricegrey rounded focus:outline-none "
                />
                <div className="flex mr-2 px-2 py-2 bg-lightgrey2 rounded">
                  <select
                    className="text-secondtext bg-lightgrey2 text-sm leading-7 focus:outline-none cursor-pointer"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">Sort by</option>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="rating:asc">Rating: Low to High</option>
                    <option value="rating:desc">Rating: High to Low</option>
                  </select>
                </div>
                <button className="flex px-2 py-[0.35rem] justify-center items-center bg-primary hover:bg-shineblue text-white text-sm font-bold leading-6 tracking-wider rounded transition transform active:scale-90">
                  Filter
                </button>
              </form>
            </div>
          </div>
          {noProductsFound && (
            <p className="flex justify-center text-secondtext text-lg py-16">
              No products found based on the specified criteria.
            </p>
          )}
          <div className="flex flex-wrap sm:flex-row gap-8 justify-center sm:justify-start items-start sm:px-48 px-8 py-4">
            <InfiniteScroll
              className="flex flex-wrap sm:flex-row gap-8 justify-center sm:justify-start items-start"
              dataLength={productList.length}
              next={loadMore}
              hasMore={productList.length < totalProductCount}
            >
              {fetchState === "FETCHING" && (
                <div className="flex items-center justify-center w-full h-72">
                  <svg className="animate-spin h-12 w-12 border-t-2 border-black rounded-full"></svg>
                </div>
              )}
              {fetchState === "FETCHED" &&
                productList.map((p) => (
                  <div key={p.id} className="flex flex-col py-4 gap-4">
                    <ProductCard product={p} img={p.images[0].url} />
                  </div>
                ))}
            </InfiniteScroll>
            <div>
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgrey mb-4">
        <Clients />
      </div>
    </div>
  );
};

export default ProductListPage;
