import React, { useEffect, useState } from "react";
import axios from "axios";
import AccordionCard from "../components/AccordionCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PreviousOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPreviousOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/1/orders");
        setIsLoading(false);
        setOrders(response.data.sort((a, b) => b.id - a.id));
      } catch (error) {
        console.error("Error fetching previous orders:", error);
        setIsLoading(false);
      }
    };

    fetchPreviousOrders();
  }, []);

  return (
    <div className="px-48 my-8">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-8">Previous Orders</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 text-2xl">
            <p>Sorry, you don't have any orders yet.</p>
            <Link
              to="/shop"
              className="flex px-5 py-2 justify-center rounded-3xl bg-white hover:bg-shineblue hover:text-white text-primary border border-solid text-sm"
            >
              Discover What's New
            </Link>
          </div>
        ) : (
          orders.map((order) => <AccordionCard key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
};

export default PreviousOrdersPage;
