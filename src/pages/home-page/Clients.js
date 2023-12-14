import brand1 from "../../assets/brands/fa-brands-1.png";
import brand2 from "../../assets/brands/fa-brands-2.png";
import brand3 from "../../assets/brands/fa-brands-3.png";
import brand4 from "../../assets/brands/fa-brands-4.png";
import brand5 from "../../assets/brands/fa-brands-5.png";
import brand6 from "../../assets/brands/fa-brands-6.png";

const Clients = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-3/4 px-40 justify-center py-16 gap-8">
        {brands.map((logo, i) => (
          <div key={i} className="flex items-center object-cover h-16 w-28">
            <img src={logo} alt="brand1"></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clients;
