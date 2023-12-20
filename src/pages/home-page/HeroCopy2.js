import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import hero3 from "../../assets/home-pics/hero3.png";

const HeroCopy2 = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/shop");
  };

  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-pricegrey to-lightgrey rounded-3xl">
      <div className="flex flex-col items-start justify-center sm:p-16 p-8 gap-8 max-w-xl">
        <p className="text-darkblue font-bold text-base leading-6 tracking-wide">
          SUMMER 2024
        </p>
        <h1 className="text-4xl font-bold text-start">NEW COLLECTION</h1>
        <p className="text-secondtext font-normal text-xl text-start">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="btn-primary w-48 h-16" onClick={handleButtonClick}>
          SHOP NOW
        </button>
      </div>
      <div>
        <img
          className="flex object-cover h-full pt-8 sm:p-0"
          src={hero3}
          alt="hero3"
        ></img>
      </div>
    </div>
  );
};
export default HeroCopy2;
