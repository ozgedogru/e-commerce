const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="bg-lightgrey flex justify-center sm:px-24 px-8">
          <div className="flex sm:justify-between justify-start items-center w-full py-10">
            <div className="flex flex-col items-start justify-center">
              <p className="text-black text-start text-2xl font-bold leading-8 tracking-tighter">
                BrandName
              </p>
              <p className="hidden sm:block text-secondtext text-start text-sm">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="sm:px-4">
              <div className="text-primary sm:px-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook p-2 text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram p-2 text-xl"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-x-twitter p-2 text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:px-24 px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-8 py-10 font-bold text-sm">
            <div className="flex flex-col items-start min-w-max sm:gap-4 gap-1 text-secondtext">
              <h5 className="text-black text-base ">Company Info</h5>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
            <div className="flex flex-col items-start min-w-max sm:gap-4 gap-1 text-secondtext">
              <h5 className="text-black text-base ">Legal</h5>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
            <div className="flex flex-col items-start min-w-max sm:gap-4 gap-1 text-secondtext">
              <h5 className="text-black text-base ">Features</h5>
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
            <div className="flex flex-col items-start min-w-max sm:gap-4 gap-1 text-secondtext">
              <h5 className="text-black text-base ">Resources</h5>
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
            <div className="flex flex-col items-start min-w-max sm:gap-4 gap-1 text-secondtext">
              <h5 className="text-black text-base ">Get In Touch</h5>
              <label>
                <div className="inline-flex shadow-md w-80 ">
                  <input className="py-3 px-5 block w-full border-lightgrey2 rounded-s-lg text-sm"></input>
                  <button className="flex px-5 py-3 justify-center items-center bg-primary hover:bg-shineblue text-white text-base font-bold leading-6 tracking-wider rounded-e-lg">
                    Subscribe
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-lightgrey flex justify-center items-center h-16 w-full sm:px-24 px-8">
          <div className="flex justify-between items-center w-full">
            <p className="text-secondtext font-bold leading-6 tracking-wide">
              Made With Love By Figmaland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
