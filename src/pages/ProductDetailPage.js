import ProductDetailCard from "../components/ProductDetailCard";
import ProductCard from "../components/ProductCard";
import Clients from "../components/Clients";

import arrowright from "../assets/shop/arrowright.png";
import productCard2 from "../assets/productcard/productCard2.png";
import cover1 from "../assets/productcard/cover1.png";
import cover2 from "../assets/productcard/cover2.png";
import cover3 from "../assets/productcard/cover3.png";
import cover4 from "../assets/productcard/cover4.png";
import cover5 from "../assets/productcard/cover5.png";
import cover6 from "../assets/productcard/cover6.png";
import cover7 from "../assets/productcard/cover7.png";
import cover8 from "../assets/productcard/cover8.png";

const ProductDetailPage = () => {
  const pcards = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
  ];

  return (
    <div>
      <div className="flex justify-center w-full bg-lightgrey">
        <div className="flex flex-col gap-8 px-8 py-10">
          <div className="flex gap-2 justify-start items-center">
            <p className="text-black font-bold leading-6">Home</p>
            <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
            <p className="text-pricegrey font-bold leading-6">Shop</p>
          </div>
          <div className="flex justify-center">
            <ProductDetailCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full px-24 py-8 gap-8">
        <div className="flex justify-center gap-8">
          <p className="text-secondtext font-bold text-sm leading-5">
            Description
          </p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Additional Information
          </p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Reviews (0)
          </p>
        </div>
        <hr className="text-lightgrey2" />
        <div className="flex flex-wrap justify-center items-start">
          <div className="flex justify-center w-1/3 min-w-[20rem] p-4">
            <img src={productCard2} alt="productCard2"></img>
          </div>
          <div className="flex flex-col justify-center w-1/3 min-w-[20rem] p-4">
            <h5 className="flex justify-start text-black font-bold text-2xl mb-2">
              the quick fox jumps over
            </h5>
            <div>
              <p className="text-start text-secondtext text-sm leading-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-1/3 min-w-[20rem] p-4 flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h5 className="flex justify-start text-black font-bold text-2xl">
                the quick fox jumps over
              </h5>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex just items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="flex justify-start text-black font-bold text-2xl">
                the quick fox jumps over
              </h5>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
                <p className="text-start text-secondtext text-sm font-bold leading-5">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center w-4/5 flex-col gap-4">
          <div className="flex flex-col items-start font-bold gap-4 mt-8">
            <h3 className="text-2xl leading-8">BESTSELLER PRODUCTS</h3>
          </div>
          <hr className="text-lightgrey2" />
          <div className="flex justify-center flex-wrap gap-8 py-8">
            {pcards.map((image, index) => (
              <ProductCard index={index} product={image} />
            ))}
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};
export default ProductDetailPage;
