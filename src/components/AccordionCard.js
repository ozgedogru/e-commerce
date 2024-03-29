import { useState } from "react";

const AccordionCard = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatOrderDate = (orderDate) => {
    const dateObj = new Date(orderDate);
    const formattedDate = `${dateObj.getDate()}/${
      dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div className="border border-lightgrey bg-lightgrey rounded-lg p-4 mb-4 shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-md">
          <strong>Order Number: </strong>
          {order.id}
        </h3>
        <h5>
          Total {order.products.length} Product
          {order.products.length !== 1 && "s"}
        </h5>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-360" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>
      {isOpen && (
        <div>
          <p className="text-md">
            <strong>Order Date:</strong> {formatOrderDate(order.orderDate)}
          </p>
          <p>
            <strong>Total Price:</strong> {order.price} $
          </p>
          <p>
            <strong>Recipient:</strong> {order.address.nameSurname}
          </p>
          <div className="flex justify-between">
            <ul className="flex flex-wrap gap-8 text-sm">
              {order.products.map((product) => (
                <li
                  key={product.id}
                  className="flex gap-2 border border-lightgrey2 bg-white rounded p-2 mt-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 rounded h-full object-cover"
                  />
                  <div className="flex flex-col self-end">
                    <p className="m-1 mb-0">{product.name}</p>
                    <p className="m-1 mt-0">{product.price} $</p>
                    <button className="border border-shineblack bg-shineblack hover:bg-white hover:text-shineblack text-white text-xs font-bold p-1 rounded active:scale-90 transition-transform">
                      Review Product
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col self-end ml-4 min-w-max">
              <button className="mt-2 bg-red text-lightgrey text-xs font-bold py-2 px-4 rounded shadow active:scale-90 transition-transform">
                Return Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
