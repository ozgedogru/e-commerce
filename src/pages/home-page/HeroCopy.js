import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import hero2 from "../../assets/home-pics/hero2.png";

const HeroCopy = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/shop");
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[70rem] h-[32rem] flex justify-start items-center rounded-xl bg-gradient-to-r from-green to-herocopy relative">
          <div className="flex flex-col w-[30rem] p-10 items-start gap-8 font-bold">
            <p className="text-darkblue text-base leading-6 tracking-wide">
              SUMMER 2024
            </p>
            <h1 className="text-4xl text-start">NEW COLLECTION</h1>
            <p className="text-secondtext font-normal text-xl text-start">
              We know how large objects will act, but things on a small scale.
            </p>
            <button
              className="btn-primary w-48 h-16"
              onClick={handleButtonClick}
            >
              SHOP NOW
            </button>
          </div>
          <div className="flex h-full w-[36rem] absolute right-0">
            <img
              className="flex object-cover rounded-md"
              src={hero2}
              alt="girl"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCopy;
