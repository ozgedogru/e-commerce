import Header from "../../layouts/Header";

import girl from "../../assets/home-pics/girl.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[80.75rem] pl-48 flex justify-center items-center rounded-md bg-gradient-to-r from-blue to-green">
          <div className="flex flex-col items-start gap-8 font-bold">
            <p className="text-darkblue text-base leading-6 tracking-wide">
              SUMMER 2024
            </p>
            <h1 className="text-5xl text-start">NEW COLLECTION</h1>
            <p className="text-secondtext font-normal text-xl text-start">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="btn-primary w-48 h-16">SHOP NOW</button>
          </div>
          <img className="flex object-cover" src={girl} alt="girl"></img>
        </div>
      </div>
    </>
  );
};
export default Hero;
