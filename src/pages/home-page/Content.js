import img4 from "../../assets/home-pics/img4.png";
import img5 from "../../assets/home-pics/img5.png";

const Content = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center flex-wrap-reverse sm:px-24 p-4 gap-8">
        <div className="flex justify-center max-w-full px-8 gap-4 object-cover">
          <div>
            <img className="w- sm:w-auto" src={img4} alt="img4"></img>
          </div>
          <div>
            <img className="w-full sm:w-auto" src={img5} alt="img5"></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start max-w-full px-8 gap-4">
          <h5 className="text-primary text-center font-bold text-base leading-6 tracking-wider">
            Featured Products
          </h5>
          <h2 className="text-black text-start text-4xl font-bold">
            We love what we do
          </h2>
          <div className="max-w-[21rem]">
            <p className="text-start text-secondtext text-sm font-bold">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <p className="text-start text-secondtext text-sm">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
