import img1 from "../../assets/home-pics/img1.jpg";
import img2 from "../../assets/home-pics/img2.jpg";
import img3 from "../../assets/home-pics/img3.jpg";

function ShopCard() {
  return (
    <div className="flex justify-center w-full pb-[4rem]">
      <div className="flex justify-center flex-wrap sm:px-24 px-8 w-full h-full gap-4 ">
        <div className="relative">
          <img
            src={img1}
            alt="img1"
            className="object-cover w-full min-h-[34rem] "
          />
          <div className="absolute bottom-0 left-0 text-white bg-transblue bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-12 hover:bg-opacity-100">
            <h4 className="text-2xl tracking-wider">Top Product Of the Week</h4>
            <button className="border border-white hover:font-bold rounded-md p-2 w-48  shadow-black shadow-2xl">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 ">
          <div className="relative">
            <img
              src={img2}
              alt="img2"
              className="object-cover w-full min-h-[24rem]"
            />
            <div className="absolute bottom-0 left-0 text-white bg-transblue bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-8 hover:bg-opacity-100">
              <h4 className="text-2xl tracking-wider">
                Top Product Of the Week
              </h4>
              <button className="border border-white hover:font-bold rounded-md p-2 w-48 shadow-black shadow-2xl">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={img3} alt="img3" className="object-cover min-h-[24rem]" />
            <div className="absolute bottom-0 left-0 text-white bg-transblue bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-8 hover:bg-opacity-100">
              <h4 className="text-2xl tracking-wider">
                Top Product Of the Week
              </h4>
              <button className="border border-white hover:font-bold rounded-md p-2 w-48 shadow-black shadow-2xl">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
