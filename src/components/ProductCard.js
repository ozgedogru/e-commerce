import { Link } from "react-router-dom/cjs/react-router-dom.min";
import slugify from "slugify";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product, 1));
    toast.info("Urun sepete eklendi.", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const categoryName = product.category.title;
  const productNameSlug = slugify(product.name, { lower: true });
  const url = `/${categoryName}/${product.id}/${productNameSlug}`;

  return (
    <div className="flex flex-col items-center justify-between sm:w-[16rem] sm:min-h-[32rem] w-72 pb-4 gap-2 shadow-md hover:scale-105 transition duration-300 ">
      <Link to={`${url}`} className="flex flex-col gap-4 items-center">
        <div className="flex min-h-[24rem]">
          <img
            className="w-full object-cover object-center"
            src={product.image}
            alt={`card {${product.id}}`}
          />
        </div>
        <h5 className="text-black text-center text-base font-bold">
          {product.name}
        </h5>
        <p className="text-secondtext text-center text-sm font-bold px-1">
          {product.description}
        </p>
        <div className="flex justify-center gap-2">
          <h5 className="text-pricegrey font-bold text-base ">
            ${product.price * 2}
          </h5>
          <h5 className="text-pricegreen font-bold text-base">
            ${product.price}
          </h5>
        </div>
      </Link>
      <div className="flex justify-center w-full">
        <button
          onClick={handleAddToCart}
          className="bg-addtocart text-white p-1 mx-4 rounded-lg w-full active:scale-90 transition-transform"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
