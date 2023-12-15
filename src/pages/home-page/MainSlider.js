import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./Hero";
import HeroCopy from "./HeroCopy";
import HeroCopy2 from "./HeroCopy2";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-aouto justify-center w-full">
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
