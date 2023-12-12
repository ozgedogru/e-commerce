const Footer = () => {
  return (
    <div>
      <div className="bg-lightgrey flex justify-center">
        <div className="flex justify-between items-center w-3/5 py-10">
          <div className="flex flex-col items-start">
            <p className="text-black text-start text-2xl font-bold leading-8 tracking-tighter">
              Consulting Agency For Your Business
            </p>
            <p className="text-secondtext text-start text-sm">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="px-4">
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between items-start w-3/5 py-10 font-bold text-sm">
          <div className="flex flex-col items-start min-w-max gap-4 text-secondtext">
            <h5 className="text-black text-base ">Company Info</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col items-start min-w-max gap-4 text-secondtext">
            <h5 className="text-black text-base ">Legal</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col items-start min-w-max gap-4 text-secondtext">
            <h5 className="text-black text-base ">Features</h5>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className="flex flex-col items-start min-w-max gap-4 text-secondtext">
            <h5 className="text-black text-base ">Resources</h5>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
          <div className="flex flex-col items-start min-w-max gap-4 text-secondtext">
            <h5 className="text-black text-base ">Get In Touch</h5>
            <div className="flex items-center gap-2">
              <i className="text-primary fa-solid fa-phone"></i>
              <p>(480) 555-0103</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="text-primary fa-solid fa-location-dot"></i>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="text-primary fa-solid fa-envelope"></i>
              <p>debra.holt@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgrey flex justify-center items-center h-16">
        <div className="flex justify-between items-center w-3/5 py-10">
          <p className="text-secondtext font-bold leading-6 tracking-wide">
            Made With Love By Figmaland All Right Reserved
          </p>
          <div className="text-primary px-4">
            <i className="fa-brands fa-facebook p-2 text-xl"></i>
            <i className="fa-brands fa-instagram p-2 text-xl"></i>
            <i className="fa-brands fa-square-x-twitter p-2 text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
