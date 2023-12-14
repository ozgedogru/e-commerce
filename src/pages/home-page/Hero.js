import girl from "../../assets/home-pics/girl.png";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-3/4 h-[32rem] pl-32 flex justify-start items-center rounded-md bg-gradient-to-r from-blue to-green">
          <div className="flex flex-col w-[36rem] py-10 items-start gap-8 font-bold">
            <p className="text-darkblue text-base leading-6 tracking-wide">
              SUMMER 2024
            </p>
            <h1 className="text-4xl text-start">NEW COLLECTION</h1>
            <p className="text-secondtext font-normal text-xl text-start">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="btn-primary w-48 h-16">SHOP NOW</button>
          </div>
          <div className="flex relative w-full h-full">
            <img
              className="flex object-cover w-full h-full absolute left-10"
              src={girl}
              alt="girl"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
