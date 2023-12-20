import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../pages/home-page/Hero";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mx-auto sm:p-8 p-4 w-full sm:px-48 px-8">
      <Slider {...settings}>
        <div>
          <Hero />
        </div>
        <div>
          <Hero />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
