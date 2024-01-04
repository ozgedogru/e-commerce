import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellers } from "../../store/actions/productActions";

const ProductCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestSellers());
  }, [dispatch]);

  const topProducts = useSelector((state) => state.productReducer.bestSellers);
  const topTen = topProducts.slice(0, 10);
  console.log("top Products", topProducts);

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center sm:px-48 items-center flex-col gap-16 sm:p-16 py-8 px-4">
        <div className="flex flex-col w-160 items-center font-bold gap-4">
          <h2 className="text-secondtext font-bold text-xl leading-6 tracking-wider">
            Featured Products
          </h2>
          <h3 className="text-2xl leading-8">BESTSELLER PRODUCTS</h3>
          <p className="text-secondtext font-normal leading-5 tracking-widest">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex justify-start flex-wrap gap-8 max-w-64">
          {topTen.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="pb-16 sm:py-16">
          <button className="btn-light">LOAD MORE PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
