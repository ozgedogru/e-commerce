import img1 from "../../assets/home-pics/img1.jpg";
import img2 from "../../assets/home-pics/img2.jpg";
import img3 from "../../assets/home-pics/img3.jpg";

const ShopCard = () => {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex">
        <img src={img1} alt="img1"></img>
      </div>
      <div className="flex flex-col justify-between">
        <img src={img2} alt="img2"></img>
        <img src={img3} alt="img3"></img>
      </div>
    </div>
  );
};
export default ShopCard;
