import img1 from "../../assets/home-pics/img1.jpg";
import img2 from "../../assets/home-pics/img2.jpg";
import img3 from "../../assets/home-pics/img3.jpg";

function ShopCard() {
  return (
    <div className="flex justify-center w-full pb-[4rem]">
      <div className="flex justify-center w-4/5 px-[4rem] gap-4">
        <div className="relative">
          <img src={img1} alt="img1" className="object-cover" />
          <div className="font-bold text-white bg-[rgba(45,139,192,0.75)] flex flex-col gap-[1rem] absolute bottom-0 pl-[2rem] pr-[8rem] pt-[3rem] pb-[1rem]">
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
            <div className="font-bold text-white bg-[rgba(45,139,192,0.75)] flex flex-col gap-[1rem] absolute bottom-0 pl-[2rem] pr-[2.5rem] pt-[2rem] pb-[1rem]">
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
            <div className="font-bold text-white bg-[rgba(45,139,192,0.75)] flex flex-col gap-[1rem] absolute bottom-0 pl-[2rem] pr-[2.5rem] pt-[2rem] pb-[1rem]">
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

export default ShopCard;
