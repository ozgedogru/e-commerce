import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../pages/home-page/Hero";
import HeroCopy from "../pages/home-page/HeroCopy";
import HeroCopy2 from "../pages/home-page/HeroCopy2";

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
    <div className="mx-auto p-8">
      <Slider {...settings}>
        <div>
          <Hero />
        </div>
        <div>
          <HeroCopy />
        </div>
        <div>
          <HeroCopy2 />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
