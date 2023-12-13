import brand1 from "../../assets/brands/fa-brands-1.png";
import brand2 from "../../assets/brands/fa-brands-2.png";
import brand3 from "../../assets/brands/fa-brands-3.png";
import brand4 from "../../assets/brands/fa-brands-4.png";
import brand5 from "../../assets/brands/fa-brands-5.png";
import brand6 from "../../assets/brands/fa-brands-6.png";

const Clients = () => {
  return (
    <>
      <div className="flex justify-center gap-8 py-24">
        <img
          className="flex justify-center items-center object-contain h-16 w-28"
          src={brand1}
          alt="brand1"
        ></img>
        <img
          className="flex justify-center items-center object-contain h-16 w-28"
          src={brand2}
          alt="brand2"
        ></img>
        <img
          className="flex justify-center items-center object-contain h-16 w-28"
          src={brand3}
          alt="brand3"
        ></img>
        <img
          className="flex justify-center items-center object-contain h-16 w-28"
          src={brand4}
          alt="brand4"
        ></img>
        <img
          className="flex justify-center items-center object-contain h-16 w-28"
          src={brand5}
          alt="brand5"
        ></img>
        <img
          className="flex justify-center items-center object-contain h-16 w-28"
          src={brand6}
          alt="brand6"
        ></img>
      </div>
    </>
  );
};
export default Clients;
