import technology2 from "../assets/about/technology2.PNG";
import arrowLinear from "../assets/about/arrowLinear.png";

const ContactPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-24 py-10 rounded-xl bg-white">
        <div className="flex justify-evenly w-2/3">
          <div className="flex flex-col justify-center w-1/2 max-w-[24rem] p-10 items-start gap-8 font-bold">
            <p className=" text-base leading-6 tracking-wide">CONTACT</p>
            <h1 className="text-4xl text-start">Get in touch today!</h1>
            <p className="text-secondtext font-normal text-lg text-start">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex flex-col items-start gap-2">
              <p className="text-black font-bold text-lg text-start">
                Phone : +451 215 215
              </p>
              <p className="text-black font-bold text-lg text-start">
                Fax : +451 215 215
              </p>
              <div className="text-start">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook pr-4 text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram pr-4 text-xl"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-x-twitter pr-4 text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <img
              className="flex object-cover"
              src={technology2}
              alt="hero"
            ></img>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col font-bold items-center gap-2">
          <h5 className="text-sm leading-6 ">VISIT OUR OFFICE</h5>
          <h2 className="text-[2.5rem] leading-10 max-w-[36rem]">
            We help small businesses with big ideas
          </h2>
        </div>
        <div className="flex justify-center items-baseline py-16 gap-4">
          <div className="flex flex-col justify-center font-bold w-[20rem] h-[24rem] gap-4 py-24 px-12 shadow-md hover:scale-110 transition duration-300">
            <i className="fa-solid fa-phone text-[4rem]"></i>
            <p className="text-sm leading-6 ">georgia.young@example.com</p>
            <p className="text-sm leading-6 ">georgia.young@ple.com</p>
            <p className="text-base leading-6 ">Get Support</p>
            <button className="btn-light">Submit Request</button>
          </div>
          <div className="flex flex-col justify-center font-bold w-[20rem] h-[28rem] gap-4 py-24 px-12 shadow-md hover:scale-105 transition duration-300 bg-black text-white">
            <i className="fa-solid fa-location-dot text-[4rem]"></i>
            <p className="text-sm leading-6 ">georgia.young@example.com</p>
            <p className="text-sm leading-6 ">georgia.young@ple.com</p>
            <p className="text-base leading-6 ">Get Support</p>
            <button className="px-5 py-4 justify-center rounded-3xl bg-black hover:bg-white hover:text-black text-primary border border-solid">
              Submit Request
            </button>
          </div>
          <div className="flex flex-col justify-center font-bold w-[20rem] h-[24rem] gap-4 py-24 px-12 shadow-md hover:scale-105 transition duration-300">
            <i className="fa-solid fa-envelope text-[4rem]"></i>
            <p className="text-sm leading-6 ">georgia.young@example.com</p>
            <p className="text-sm leading-6 ">georgia.young@ple.com</p>
            <p className="text-base leading-6 ">Get Support</p>
            <button className="btn-light">Submit Request</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 py-10">
        <img src={arrowLinear} alt="arrrow"></img>
        <h5 className="text-sm leading-6 font-bold ">
          WE Can't WAIT TO MEET YOU
        </h5>
        <h2 className="text-[2.5rem] leading-10 max-w-[36rem] font-bold">
          Let's Talk
        </h2>
        <button className="btn-primary">Try it free now</button>
      </div>
    </div>
  );
};
export default ContactPage;
