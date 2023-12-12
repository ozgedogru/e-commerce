import brand1 from "../assets/brands/fa-brands-1.png";
import brand2 from "../assets/brands/fa-brands-2.png";
import brand3 from "../assets/brands/fa-brands-3.png";
import brand4 from "../assets/brands/fa-brands-4.png";
import brand5 from "../assets/brands/fa-brands-5.png";
import brand6 from "../assets/brands/fa-brands-6.png";
import img1 from "../assets/home-pics/img1.jpg";
import img2 from "../assets/home-pics/img2.jpg";
import img3 from "../assets/home-pics/img3.jpg";
import img4 from "../assets/home-pics/img4.png";
import img5 from "../assets/home-pics/img5.png";
import book from "../assets/icons/book.png";
import notebook from "../assets/icons/notebook.png";
import graph from "../assets/icons/graph.png";
import girl from "../assets/home-pics/girl.png";

import ProductCard from "../components/ProductCard";
import PostCard from "../components/PostCard";

export const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80.75rem] pl-48 flex justify-center items-center rounded-md bg-gradient-to-r from-blue to-green">
          <div className="flex flex-col items-start gap-8 font-bold">
            <p className="text-darkblue text-base leading-6 tracking-wide">
              SUMMER 2024
            </p>
            <h1 className="text-5xl text-start">NEW COLLECTION</h1>
            <p className="text-secondtext font-normal text-xl text-start">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="btn-primary w-48 h-16">SHOP NOW</button>
          </div>
          <img className="flex object-cover" src={girl} alt="girl"></img>
        </div>
      </div>
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
      <div className="flex justify-center gap-4">
        <div className="flex">
          <img src={img1} alt="img1"></img>
        </div>
        <div className="flex flex-col justify-between">
          <img src={img2} alt="img2"></img>
          <img src={img3} alt="img3"></img>
        </div>
      </div>
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
        <div>
          <div>
            <ProductCard />
          </div>
        </div>
        <div className="py-16">
          <button className="btn-light">LOAD MORE PRODUCTS</button>
        </div>
      </div>
      <div className="flex justify-center gap-20">
        <div className="flex justify-center gap-8">
          <img src={img4} alt="img4"></img>
          <img src={img5} alt="img5"></img>
        </div>
        <div className="flex flex-col justify-center items-start w-96 gap-4">
          <h5 className="text-primary font-bold text-base leading-6 tracking-wider">
            Featured Products
          </h5>
          <h2 className="text-black text-4xl font-bold">We love what we do</h2>
          <p className="text-start text-secondtext text-sm font-bold">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="text-start text-secondtext text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-20 gap-16">
        <div className="flex flex-col w-160 items-center font-bold gap-4">
          <h2 className="text-secondtext font-bold text-xl leading-6 tracking-wider">
            Featured Products
          </h2>
          <h3 className="text-2xl leading-8">THE BEST SERVICES</h3>
          <p className="text-secondtext font-normal leading-5 tracking-widest">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-24">
          <div className="flex flex-col items-center w-[18rem] gap-6">
            <img className="w-16 h-16" src={book} alt="book"></img>
            <h3 className="font-bold text-2xl">Easy Wins</h3>
            <p className="text-secondtext font-normal leading-5 tracking-widest">
              Get your best looking smile now!
            </p>
          </div>
          <div className="flex flex-col items-center w-[18rem] gap-6">
            <img className="w-16 h-16" src={notebook} alt="notebook"></img>
            <h3 className="font-bold text-2xl">Concrete</h3>
            <p className="text-secondtext font-normal leading-5 tracking-widest">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="flex flex-col items-center w-[18rem] gap-6">
            <img className="w-16 h-16" src={graph} alt="graph"></img>
            <h3 className="font-bold text-2xl">Hack Growth</h3>
            <p className="text-secondtext font-normal leading-5 tracking-widest">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col py-20 gap-2">
            <h6 className="text-primary font-bold font-sm">Practice Advice</h6>
            <h3 className="text-black font-bold text-5xl">Featured Posts</h3>
          </div>
          <div>
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
