import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productCard1 from "../assets/productcard/productCard1.jpg";
import productCard2 from "../assets/productcard/productCard2.png";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mx-auto w-[32rem]">
      <Slider {...settings}>
        <div>
          <img className="object-cover" src={productCard1} alt="pic1"></img>
        </div>
        <div>
          <img className="object-cover" src={productCard1} alt="pic1"></img>
        </div>
        <div>
          <img className="object-cover" src={productCard1} alt="pic1"></img>
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
