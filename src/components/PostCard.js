import frame from "../assets/posts/frame.png";
import ellipse1 from "../assets/posts/ellipse1.png";
import ellipse2 from "../assets/posts/ellipse2.png";
import ellipse3 from "../assets/posts/ellipse3.png";
import ellipse4 from "../assets/posts/ellipse4.png";
import icon1 from "../assets/posts/icon1.png";
import icon2 from "../assets/posts/icon2.png";
import icon3 from "../assets/posts/icon3.png";
import arrow from "../assets/posts/arrow.png";
import { useState } from "react";

const PostCard = ({ posts, index }) => {
  const [fav, setFav] = useState(false);

  const addFav = () => {
    setFav(!fav);
  };

  return (
    <div className="flex flex-wrap justify-center items-center border border-lightgrey shadow-md p-4">
      <div className="flex justify-center h-[15rem] sm:h-auto relative">
        <img
          src={posts}
          alt={`post${index}`}
          className="w-[15rem] h-auto object-cover object-bottom "
        ></img>
        <div className="bg-red absolute top-4 left-4 px-3 py-1 rounded-md shadow-black shadow-md ">
          <p className="text-white font-bold leading-6">Sale</p>
        </div>
        <div className="sm:flex justify-evenly w-[full] absolute bottom-8 gap-2 hidden">
          <button onClick={() => addFav()}>
            <i
              className={`${
                fav ? "fa solid fa-heart text-red" : "fa-regular fa-heart "
              }  p-3 rounded-3xl hover:scale-110 transition-transform bg-white`}
            ></i>
          </button>
          <button>
            <i className="fa-solid fa-cart-shopping p-3 rounded-3xl hover:scale-110 transition-transform bg-white"></i>
          </button>
          <button>
            <i className="fa-solid fa-eye p-3 rounded-3xl hover:scale-110 transition-transform bg-white"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start max-w-[20rem] w-[15rem] p-4 gap-4">
        <div className="flex justify-between gap-2">
          <h4 className="text-primary font-bold text-sm text-start">
            English Department
          </h4>
          <div className="flex bg-black rounded-2xl items-center h-8 gap-1 p-2">
            <i className="fa-solid fa-star text-yellow"></i>
            <p className="text-white text-xs leading-4">4.9</p>
          </div>
        </div>
        <h5 className="text-start text-black font-bold text-base leading-6">
          Graphic Design
        </h5>
        <p className="text-start text-secondtext text-sm leading-5">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="hidden sm:flex gap-2">
          <img src={frame} alt="frame"></img>
          <p className="text-secondtext font-bold text-sm leading-5">
            15 Sales
          </p>
        </div>
        <div className="flex gap-2">
          <h5 className="text-pricegrey font-bold text-base ">$16.48</h5>
          <h5 className="text-pricegreen font-bold text-base">$6.48</h5>
        </div>
        <div className="hidden sm:flex gap-2">
          <img src={ellipse1} alt="color1"></img>
          <img src={ellipse2} alt="color2"></img>
          <img src={ellipse3} alt="color3"></img>
          <img src={ellipse4} alt="color4"></img>
        </div>
        <div className="hidden sm:flex flex-wrap gap-2 text-secondtext text-xs leading-4 tracking-widest ">
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={icon1} alt="icon1"></img>
            <p>22h..</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={icon2} alt="icon2"></img>
            <p>64 Lessons</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={icon3} alt="icon3"></img>
            <p>Progress</p>
          </div>
        </div>
        <button className="flex sm:justify-center items-center gap-1 bg-white text-primary font-bold sm:border border-solid rounded-3xl sm:p-2 w-36">
          Learn More
          <img src={arrow} alt="arrow"></img>
        </button>
      </div>
    </div>
  );
};
export default PostCard;
