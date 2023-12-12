import pc1 from "../assets/productcard/pc1.png";
import pc2 from "../assets/productcard/pc2.png";
import pc3 from "../assets/productcard/pc3.png";
import pc4 from "../assets/productcard/pc4.png";
import pc5 from "../assets/productcard/pc5.png";
import pc6 from "../assets/productcard/pc6.png";
import pc7 from "../assets/productcard/pc7.png";
import pc8 from "../assets/productcard/pc8.png";

const ProductCard = () => {
  const pcards = [pc1, pc2, pc3, pc4, pc5, pc1, pc6, pc7, pc8, pc3];

  return (
    <div className="flex justify-center flex-wrap w-[70rem] gap-8">
      {pcards.map((image, index) => (
        <div className="flex flex-col gap-4">
          <img key={index} src={image} alt={`card {${index}}`}></img>
          <h5 className="text-black text-base font-bold">Graphic Design</h5>
          <p className="text-secondtext text-sm font-bold">
            English Department
          </p>
          <div className="flex justify-center gap-2">
            <h5 className="text-pricegrey font-bold text-base ">$16.48</h5>
            <h5 className="text-pricegreen font-bold text-base">$6.48</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
