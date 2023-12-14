const Header = () => {
  return (
    <div className="w-full flex flex-col mb-4">
      <div className="flex justify-center items-center min-h-14 bg-black text-white">
        <div className="flex justify-between items-center font-bold w-full px-6">
          <div className="flex items-center p-2.5 gap-[0.3rem]">
            <div className="flex p-2.5 gap-1 items-center">
              <i className="fa-solid fa-phone"></i>
              <p>(225) 555-0118</p>
            </div>
            <div className="flex p-2.5 gap-1 items-center">
              <i className="fa-solid fa-envelope"></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center p-2.5 gap-2.5">
            <p>Follow Us :</p>
            <i className="fa-brands fa-instagram p-1"></i>
            <i className="fa-brands fa-youtube p-1"></i>
            <i className="fa-brands fa-facebook p-1"></i>
            <i className="fa-brands fa-square-x-twitter p-1"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-14">
        <div className="flex justify-between items-center font-bold w-full px-6 gap-10">
          <div className="flex p-4 text-2xl font-bold leading-8 tracking-tighter">
            <h3>BrandName</h3>
          </div>
          <div className="flex justify-between grow items-center p-0.5">
            <nav className="flex">
              <ul className="flex items-center text-secondtext font-bold text-base leading-6 tracking-wide gap-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/pages">Pages</a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center text-primary font-bold">
              <div className="flex items-center p-4 gap-1">
                <i className="fa-regular fa-user"></i>
                <button>Login / Register</button>
              </div>
              <div className="flex items-center p-4 gap-1">
                <i className="fa-solid fa-search"></i>
                <p></p>
              </div>
              <div className="flex items-center p-4 gap-1">
                <i className="fa-solid fa-cart-shopping"></i>
                <p></p>
              </div>
              <div className="flex items-center p-4 gap-1">
                <i className="fa-regular fa-heart"></i>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
