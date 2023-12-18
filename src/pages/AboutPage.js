import hero from "../assets/about/technology.png";
import video from "../assets/about/video.png";
import team1 from "../assets/about/team1.jpg";
import team2 from "../assets/about/team2.jpg";
import team3 from "../assets/about/team3.jpg";
import contact from "../assets/about/contact.png";

import TeamCard from "../components/TeamCard";
import Clients from "../components/Clients";

const AboutPage = () => {
  const teamAbout = [
    { img: team1, username: "Username", profession: "Profession" },
    { img: team2, username: "Username", profession: "Profession" },
    { img: team3, username: "Username", profession: "Profession" },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center px-24  rounded-xl bg-white">
        <div className="flex flex-col w-1/2 max-w-[24rem] p-10 items-start gap-8 font-bold">
          <p className=" text-base leading-6 tracking-wide">ABOUT COMPONY</p>
          <h1 className="text-4xl text-start">ABOUT US</h1>
          <p className="text-secondtext font-normal text-lg text-start">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="btn-primary w-48 h-16">Get Quote Now</button>
        </div>
        <div className="flex h-full">
          <img className="flex object-cover" src={hero} alt="hero"></img>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 px-24 py-10">
        <div className="flex flex-col max-w-lg">
          <p className="text-sm text-red leading-5 text-start">
            Problems trying
          </p>
          <h2 className="font-bold text-2xl leading-8 text-start">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="flexs max-w-lg">
          <p className="text-secondtext font-normal text-sm leading-5 text-start">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 px-24 py-10">
        <div className="flex flex-col justify-center w-60">
          <p className="font-bold text-5xl leading-20">15K</p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Happy Customers
          </p>
        </div>
        <div className="flex flex-col justify-center w-60">
          <p className="font-bold text-5xl leading-20">150K</p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Monthly Visitors
          </p>
        </div>
        <div className="flex flex-col justify-center w-60">
          <p className="font-bold text-5xl leading-20">15</p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Countries Worldwide
          </p>
        </div>
        <div className="flex flex-col justify-center w-60">
          <p className="font-bold text-5xl leading-20">100+</p>
          <p className="text-secondtext font-bold text-sm leading-5">
            Top Partners
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center relative py-10 gap-10">
        <img className="rounded-2xl" src={video} alt="video"></img>
        <button className="absolute text-white bg-primary rounded-full p-4 px-6">
          <i className="fa-solid fa-play text-2xl"></i>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center py-10 gap-20">
        <div className="flex flex-col justify-center py-10 gap-4">
          <a href="/team">
            <h2 className="font-bold text-[2.5rem] leading-[3rem] hover:text-shineblack">
              Meet Our Team
            </h2>
          </a>
          <p className="text-secondtext font-bold text-sm leading-5 max-w-[28rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div>
          <TeamCard team={teamAbout} />
        </div>
      </div>
      <div className="w-full bg-lightgrey py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-10 py-10">
            <h3 className="font-bold text-[2.5rem] leading-8">
              Big Companies Are Here
            </h3>
            <p className="text-secondtext font-bold leading-5 tracking-widest max-w-[36rem]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <Clients />
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-primary relative">
        <img
          className="flex object-cover h-full w-full"
          src={contact}
          alt="contact"
        ></img>
        <div className="flex flex-col absolute max-w-[32rem] p-10 justify-center items-center gap-8 font-bold text-white">
          <h1 className="text-4xl text-center text-black">
            Get answers to all your questions.
          </h1>
          <p className=" text-secondtext font-normal text- text-center">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="btn-primary">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
