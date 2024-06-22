import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";
import Clients from "../components/Clients";
import arrowright from "../assets/shop/arrowright.png";
import shopCard from "../assets/productcard/productCard2.jpg";
import { Link, useHistory } from "react-router-dom";
import { AxiosInstance } from "../api/axiosInstance";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchBestSellers } from "../store/actions/productActions";

const ProductDetailPage = () => {
  const [productDetails, setProductDetails] = useState(null);

  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const bestSellers = useSelector((state) => state.productReducer.bestSellers);

  useEffect(() => {
    const fetchProductDetails = async (id) => {
      try {
        const res = await AxiosInstance.get(`products/${id}`);
        console.log("product details > ", res.data);
        setProductDetails(res.data);
        if (res.data.category.id) {
          dispatch(fetchBestSellers(res.data.category.id, "rating:desc", 4));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductDetails(productId);
  }, [productId, dispatch]);

  /// sayfayi en uste tasi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    scrollToTop();
  }, [productId]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center w-full sm:px-48 px-8 bg-lightgrey">
        <div className="flex flex-col w-full gap-8 py-10">
          <div className="flex gap-2 justify-start items-center">
            <button onClick={() => history.goBack()}>
              <i className="fa-solid fa-backward hover:scale-110 active:scale-90 "></i>
            </button>
            <div className="text-black font-bold leading-6">
              <Link
                to="/"
                className="text-black font-bold leading-6 hover:text-primary"
              >
                Home
              </Link>
            </div>
            <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
            <div className="text-pricegrey font-bold leading-6 cursor-pointer hover:text-primary">
              <Link to="/shop">Shop</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <ProductDetailCard productDetails={productDetails} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full sm:px-48 px-8 py-8 gap-8">
        <div className="flex justify-center gap-8">
          <p className="text-secondtext font-bold text-sm leading-5">
            Description
          </p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Additional Information
          </p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Reviews (0)
          </p>
        </div>
        <hr className="text-lightgrey2" />
        <div className="flex flex-wrap w-full justify-center sm:items-start items-center">
          <div className="flex justify-center w-1/3 min-w-[20rem] p-4 pl-0">
            <img
              className="w-full rounded-xl"
              src={shopCard}
              alt="shopCard"
            ></img>
          </div>
          <div className="flex flex-col w-1/3 min-w-[20rem] p-4">
            <h5 className="flex justify-start text-black font-bold text-2xl mb-2">
              the quick fox jumps over
            </h5>
            <div>
              <p className="text-start text-secondtext text-sm leading-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <br />
              <p className="text-start text-secondtext text-sm leading-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <br />
              <p className="text-start text-secondtext text-sm leading-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="flex w-1/3 min-w-[20rem] p-4 flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h5 className="flex justify-start text-black font-bold text-2xl">
                the quick fox jumps over
              </h5>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex just items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="flex justify-start text-black font-bold text-2xl">
                the quick fox jumps over
              </h5>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full sm:px-48 px-8">
        <div className="flex justify-center w-full flex-col gap-4">
          <div className="flex flex-col items-start font-bold gap-4 mt-8">
            <h3 className="text-2xl leading-8">TOP PICKS IN THIS CATEGORY</h3>
          </div>
          <hr className="text-lightgrey2" />
          <div className="flex justify-start flex-wrap gap-8 py-8 w-full">
            {bestSellers.map((best) => (
              <ProductCard key={best.id} product={best} />
            ))}
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};
export default ProductDetailPage;
