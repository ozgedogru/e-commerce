import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ellipse1 from "../assets/posts/ellipse1.png";
import ellipse2 from "../assets/posts/ellipse2.png";
import ellipse3 from "../assets/posts/ellipse3.png";
import ellipse4 from "../assets/posts/ellipse4.png";

const ProductCard = ({ product, index }) => {
  const history = useHistory();
  const getProductDetail = () => {
    history.push(`/product`);
  };

  return (
    <div
      onClick={() => getProductDetail()}
      className="flex flex-col gap-4 pb-8 shadow-md hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img src={product} alt={`card {${index}}`}></img>
      <h5 className="text-black text-base font-bold">Graphic Design</h5>
      <p className="text-secondtext text-sm font-bold">English Department</p>
      <div className="flex justify-center gap-2">
        <h5 className="text-pricegrey font-bold text-base ">$16.48</h5>
        <h5 className="text-pricegreen font-bold text-base">$6.48</h5>
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
