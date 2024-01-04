import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ellipse1 from "../assets/posts/ellipse1.png";
import ellipse2 from "../assets/posts/ellipse2.png";
import ellipse3 from "../assets/posts/ellipse3.png";
import ellipse4 from "../assets/posts/ellipse4.png";
import slugify from "slugify";

const ProductCard = ({ product }) => {
  const history = useHistory();
  const getProductDetail = () => {
    const categoryMap = {
      1: "kadinTisort",
      2: "kadinAyakkabi",
      3: "kadinCeket",
      4: "kadinElbise",
    };
    const categoryName = categoryMap[product.category_id];
    const productNameSlug = slugify(product.name, { lower: true });
    const url = `/${categoryName}/${product.id}/${productNameSlug}`;
    history.push(url);
  };

  const productImg = product.images[0].url;

  return (
    <div
      onClick={() => getProductDetail()}
      className="flex flex-col items-center justify-around sm:w-[16rem] sm:min-h-[36rem] w-72 gap-4 pb-8 shadow-md hover:scale-105 transition duration-300 cursor-pointer"
    >
      <div className="flex max-h-[20rem]">
        <img
          className="w-full object-cover object-center "
          src={productImg}
          alt={`card {${product.id}}`}
        ></img>
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
      <div className="flex justify-center gap-1">
        <img src={ellipse1} alt="color1"></img>
        <img src={ellipse2} alt="color2"></img>
        <img src={ellipse3} alt="color3"></img>
        <img src={ellipse4} alt="color4"></img>
      </div>
    </div>
  );
};

export default ProductCard;
