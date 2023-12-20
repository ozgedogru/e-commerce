import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import girl from "../../assets/home-pics/girl.png";

const Hero = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/shop");
  };
  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-blue to-green rounded-3xl">
      <div className="flex flex-col sm:items-start items-center justify-center sm:p-16 p-8 gap-8 max-w-xl">
        <p className="text-darkblue font-bold text-base leading-6 tracking-wide">
          SUMMER 2024
        </p>
        <h1 className="sm:text-4xl text-3xl font-bold text-center sm:text-start">
          NEW COLLECTION
        </h1>
        <p className="text-secondtext font-normal text-xl sm:text-start text-center">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="btn-primary w-48 h-16" onClick={handleButtonClick}>
          SHOP NOW
        </button>
      </div>
      <div>
        <img
          className="flex object-cover h-full pt-8 sm:p-0"
          src={girl}
          alt="girl"
        ></img>
      </div>
    </div>
  );
};
export default Hero;
