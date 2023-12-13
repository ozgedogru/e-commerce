import ProductCard from "../ProductCard";

import pc1 from "../../assets/productcard/pc1.png";
import pc2 from "../../assets/productcard/pc2.png";
import pc3 from "../../assets/productcard/pc3.png";
import pc4 from "../../assets/productcard/pc4.png";
import pc5 from "../../assets/productcard/pc5.png";
import pc6 from "../../assets/productcard/pc6.png";
import pc7 from "../../assets/productcard/pc7.png";
import pc8 from "../../assets/productcard/pc8.png";

const ProductCards = () => {
  const pcards = [pc1, pc2, pc3, pc4, pc5, pc1, pc6, pc7, pc8, pc3];

  return (
    <div className="flex justify-center items-center flex-col gap-16 p-16">
      <div className="flex flex-col w-160 items-center font-bold gap-4">
        <h2 className="text-secondtext font-bold text-xl leading-6 tracking-wider">
          Featured Products
        </h2>
        <h3 className="text-2xl leading-8">BESTSELLER PRODUCTS</h3>
        <p className="text-secondtext font-normal leading-5 tracking-widest">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex justify-center flex-wrap w-[70rem] gap-8">
        {pcards.map((image, index) => (
          <ProductCard index={index} product={image} />
        ))}
      </div>
      <div className="py-16">
        <button className="btn-light">LOAD MORE PRODUCTS</button>
      </div>
    </div>
  );
};
export default ProductCards;
