import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import girl from "../../assets/home-pics/girl.png";

const Hero = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/shop");
  };
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[70rem] h-[32rem] pl-36 flex justify-start items-center rounded-xl bg-gradient-to-r from-blue to-green relative">
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
          <div className="flex h-full w-[36rem] absolute left-[38rem]">
            <img className="flex object-cover" src={girl} alt="girl"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
