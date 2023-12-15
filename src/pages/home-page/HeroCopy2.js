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
        <div className="w-[72rem] h-[32rem] pl-36 flex justify-start items-center rounded-md relative">
          <img
            className="w-full h-full object-cover rounded-md"
            src={hero3}
          ></img>
          <div className="flex flex-col w-[24rem] p-10 items-start gap-4 font-bold absolute">
            <p className="text-darkblue text-base leading-6 tracking-wide">
              SUMMER 2024
            </p>
            <h1 className="text-4xl text-start">NEW COLLECTION</h1>
            <button
              className="btn-primary w-36 h-12"
              onClick={handleButtonClick}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCopy2;
