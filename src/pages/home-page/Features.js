import book from "../../assets/icons/book.png";
import notebook from "../../assets/icons/notebook.png";
import graph from "../../assets/icons/graph.png";

const Features = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center sm:px-48 justify-center px-4 sm:py-24">
        <div className="flex flex-col items-center font-bold py-24 gap-4">
          <h2 className="text-secondtext font-bold text-xl leading-6 tracking-wider">
            Featured Products
          </h2>
          <h3 className="text-2xl leading-8">THE BEST SERVICES</h3>
          <p className="text-secondtext text-center font-normal leading-5 tracking-widest">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-baseline justify-evenly w-6/7 gap-8">
          <div className="flex flex-col items-center w-[18rem] px-8 gap-4">
            <img className="w-16 h-16" src={book} alt="book"></img>
            <h3 className="font-bold text-2xl">Easy Wins</h3>
            <p className="text-secondtext text-center font-normal leading-5 tracking-widest">
              Get your best looking smile now!
            </p>
          </div>
          <div className="flex flex-col items-center w-[18rem] px-8 gap-4">
            <img className="w-16 h-16" src={notebook} alt="notebook"></img>
            <h3 className="font-bold text-2xl">Concrete</h3>
            <p className="text-secondtext text-center font-normal leading-5 tracking-widest">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="flex flex-col items-center w-[18rem] px-8 gap-4">
            <img className="w-16 h-16" src={graph} alt="graph"></img>
            <h3 className="font-bold text-2xl">Hack Growth</h3>
            <p className="text-secondtext text-center font-normal leading-5 tracking-widest">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
