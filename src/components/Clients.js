import brand1 from "../assets/brands/fa-brands-1.png";
import brand2 from "../assets/brands/fa-brands-2.png";
import brand3 from "../assets/brands/fa-brands-3.png";
import brand4 from "../assets/brands/fa-brands-4.png";
import brand5 from "../assets/brands/fa-brands-5.png";
import brand6 from "../assets/brands/fa-brands-6.png";

const Clients = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col sm:flex-row flex-wrap sm:px-40 sm:py-20 py-10 justify-center gap-10">
        {brands.map((logo, i) => (
          <div
            key={i}
            className="flex justify-center items-center object-cover h-16 w-28"
          >
            <img src={logo} alt="brand1"></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clients;
