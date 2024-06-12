import ellipse1 from "../assets/posts/ellipse1.png";
import ellipse2 from "../assets/posts/ellipse2.png";
import ellipse3 from "../assets/posts/ellipse3.png";
import ellipse4 from "../assets/posts/ellipse4.png";
import { useState } from "react";
import ProductSlider from "../layouts/sliders/ProductSlider";
import StarRating from "./StarRating";
import { addToCart } from "../store/actions/shoppingCartActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductDetailCard = ({ productDetails }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("handle add to card function has been trigered");
    dispatch(addToCart(productDetails, 1));
    toast.info("The product has been added to the cart.", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  //heart thing
  const [fav, setFav] = useState(false);
  const addFav = () => {
    setFav(!fav);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:w-full min-w-min gap-8 justify-start shadow-lg">
      <div className="flex flex-col min-w-sm gap-1">
        <ProductSlider productDetails={productDetails} />
        <div className="flex gap-1 w-24 h-24">
          <img
            className="opacity-50 object-cover w-full h-full"
            src={productDetails?.image}
            alt="pic1"
          ></img>
        </div>
      </div>
      <div className="flex flex-col justify-between max-w-max gap-4 sm:p-8 p-4">
        <h5 className="flex justify-start text-black text-xl leading-7">
          {productDetails?.name}
        </h5>
        <div className="flex justify-start">
          <StarRating rating={productDetails?.rating} />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="flex justify-start text-black font-bold text-2xl ">
            ${productDetails?.price}
          </h5>
          <div className="flex gap-1">
            <p className="text-secondtext font-bold text-sm leading-5">
              Availability :
            </p>
            <p className="font-bold text-sm leading-5">
              {productDetails?.stock !== 0 ? (
                <p className="text-primary">In Stock</p>
              ) : (
                <p className="text-red">Out of Stock</p>
              )}
            </p>
          </div>
        </div>
        <div>
          <p className="text-start text-secondtext text-sm leading-5">
            {productDetails?.description}
          </p>
        </div>
        <hr className="text-lightgrey2" />
        <div className="flex gap-2">
          <img src={ellipse1} alt="color1"></img>
          <img src={ellipse2} alt="color2"></img>
          <img src={ellipse3} alt="color3"></img>
          <img src={ellipse4} alt="color4"></img>
        </div>
        <div className="flex gap-4">
          <button className="flex sm:px-5 px-2 sm:py-3 py-2 justify-center items-center sm:rounded-3xl rounded-xl bg-primary hover:bg-shineblue text-white sm:text-base text-xs font-bold leading-6 tracking-wide">
            Select Options
          </button>
          <div className="flex gap-2">
            <button onClick={() => addFav()}>
              <i
                className={`${
                  fav ? "fa solid fa-heart text-red" : "fa-regular fa-heart "
                }  p-3 rounded-3xl border border-pricegrey hover:scale-110 transition-transform bg-white`}
              ></i>
            </button>
            <button onClick={handleAddToCart}>
              <i className="fa-solid fa-cart-shopping p-3 rounded-3xl border border-pricegrey hover:scale-110 active:scale-90 transition-transform bg-white"></i>
            </button>
            <button>
              <i className="fa-solid fa-eye p-3 rounded-3xl border border-pricegrey hover:scale-110 transition-transform bg-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
