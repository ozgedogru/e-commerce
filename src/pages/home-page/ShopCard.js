import img1 from "../../assets/home-pics/img1.jpg";
import img2 from "../../assets/home-pics/img2.jpg";
import img3 from "../../assets/home-pics/img3.jpg";

function ShopCards() {
  return (
    <div className="flex justify-center w-fullpy-[4rem]">
      <div className="flex justify-center w-4/5 px-[4rem] gap-4">
        <div className="relative">
          <img src={img1} alt="img1" className="object-cover" />
          <div className="font-bold text-white bg-[rgba(45,139,192,0.75)] flex flex-col gap-[1rem] absolute bottom-0 pl-[3rem] pr-[10rem] pt-[4rem] pb-[2rem]">
            <h4 className="text-2xl tracking-wider mb-[-1rem]">
              Top Product Of
            </h4>
            <h4 className="text-2xl tracking-wider">the Week</h4>
            <button className="border border-solid rounded-[0.3rem] border-white py-[1.2rem] px-[3rem] text-sm">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[1.4rem] ml-[1.4rem]">
          <div className="relative flex-shrink-0">
            <img src={img2} alt="img2" className="object-cover" />
            <div className="font-bold text-white bg-[rgba(45,139,192,0.75)] flex flex-col gap-[1rem] absolute bottom-0 pl-[3rem] pr-[3.5rem] pt-[2.8rem] pb-[2rem]">
              <h4 className="text-xl font-medium tracking-wider">
                Top Product Of the Week
              </h4>
              <button className="border border-solid rounded-[0.3rem] border-white py-[1rem] w-[11.5rem] text-sm">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <img src={img3} alt="img3" className="object-cover" />
            <div className="font-bold text-white bg-[rgba(45,139,192,0.75)] flex flex-col gap-[1rem] absolute bottom-0 pl-[3rem] pr-[3.5rem] pt-[2.8rem] pb-[2rem]">
              <h4 className="text-xl font-medium tracking-wider">
                Top Product Of the Week
              </h4>
              <button className="border border-solid rounded-[0.3rem] border-white py-[1rem] w-[11.5rem] text-sm">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
