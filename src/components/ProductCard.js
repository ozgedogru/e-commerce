const ProductCard = ({ product, index }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={product} alt={`card {${index}}`}></img>
      <h5 className="text-black text-base font-bold">Graphic Design</h5>
      <p className="text-secondtext text-sm font-bold">English Department</p>
      <div className="flex justify-center gap-2">
        <h5 className="text-pricegrey font-bold text-base ">$16.48</h5>
        <h5 className="text-pricegreen font-bold text-base">$6.48</h5>
      </div>
    </div>
  );
};

export default ProductCard;
