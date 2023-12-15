import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import hero3 from "../../assets/home-pics/hero3.jpg";

const HeroCopy2 = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/shop");
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[70rem] h-[32rem] flex justify-center items-center rounded-xl relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={hero3}
            alt="hero3"
          ></img>
          <div className="flex flex-col w-[36rem] p-10 items-center gap-4 font-bold absolute bottom-20">
            <h1 className="text-5xl text-white">BLACK FRIDAY</h1>
            <p className="text-white font-normal text-xl text-center">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <button
              className="btn-primary w-36 h-12"
              onClick={handleButtonClick}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCopy2;
