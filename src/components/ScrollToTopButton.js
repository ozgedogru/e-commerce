import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 800);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-10 right-20 text-4xl text-pricegrey px-4 py-2 cursor-pointer transform transition-transform active:scale-50 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <i className="fa-solid fa-angles-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
