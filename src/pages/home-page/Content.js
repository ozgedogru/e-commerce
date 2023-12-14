import img4 from "../../assets/home-pics/img4.png";
import img5 from "../../assets/home-pics/img5.png";

const Content = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center flex-wrap w-3/4 gap-4">
        <div className="flex justify-center gap-8 object-cover">
          <img src={img4} alt="img4"></img>
          <img src={img5} alt="img5"></img>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h5 className="text-primary font-bold text-base leading-6 tracking-wider">
            Featured Products
          </h5>
          <h2 className="text-black text-start text-4xl font-bold">
            We love what we do
          </h2>
          <div className="w-[21rem]">
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
