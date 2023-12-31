import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const ProductSlider = () => {
  const selectedProduct = useSelector(
    (state) => state.productReducer.selectedProduct
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mx-auto w-72 h-72 sm:w-96 sm:h-96">
      <Slider {...settings}>
        <div className="flex w-72 h-72 sm:w-96 sm:h-96">
          <img
            className="object-cover w-full h-full"
            src={selectedProduct.images[0].url}
            alt="pic1"
          ></img>
        </div>
        <div className="flex w-72 h-72 sm:w-96 sm:h-96">
          <img
            className="object-cover w-full h-full"
            src={selectedProduct.images[0].url}
            alt="pic1"
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
