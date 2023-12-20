import TeamCard from "../components/TeamCard";

import teamheader1 from "../assets/about/teamheader1.png";
import teamheader2 from "../assets/about/teamheader2.png";
import teamheader3 from "../assets/about/teamheader3.png";
import teamheader4 from "../assets/about/teamheader4.png";
import teamheader5 from "../assets/about/teamheader5.png";
import arrowright from "../assets/shop/arrowright.png";
import team1 from "../assets/about/team1.jpg";
import team2 from "../assets/about/team2.jpg";
import team3 from "../assets/about/team3.jpg";

const TeamPage = () => {
  const team = [
    { img: team1, username: "Username", profession: "Profession" },
    { img: team2, username: "Username", profession: "Profession" },
    { img: team3, username: "Username", profession: "Profession" },
    { img: team1, username: "Username", profession: "Profession" },
    { img: team2, username: "Username", profession: "Profession" },
    { img: team3, username: "Username", profession: "Profession" },
    { img: team1, username: "Username", profession: "Profession" },
    { img: team2, username: "Username", profession: "Profession" },
    { img: team3, username: "Username", profession: "Profession" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 sm:px-0 px-8 py-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <h5 className="text-secondtext text-md font-bold leading-6 ">
          WHAT WE DO
        </h5>
        <h2 className="font-bold sm:text-6xl text-4xl sm:leading-[5rem] leading-10 ">
          Innovation tailored for you
        </h2>
        <div className="flex gap-2 justify-end items-center">
          <a href="/" className="text-black font-bold leading-6">
            Home
          </a>
          <img className="w-2 h-4" src={arrowright} alt="arrow"></img>
          <p className="text-pricegrey font-bold leading-6">Team</p>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-4">
        <div className="flex">
          <img src={teamheader1} alt="teamheader"></img>
        </div>
        <div className="flex flex-col gap-4">
          <img src={teamheader2} alt="teamheader"></img>
          <img src={teamheader3} alt="teamheader"></img>
        </div>
        <div className="flex flex-col gap-4">
          <img src={teamheader4} alt="teamheader"></img>
          <img src={teamheader5} alt="teamheader"></img>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 sm:gap-20 gap-10">
        <div className="flex flex-col justify-center py-10 gap-4">
          <h2 className="font-bold text-[2.5rem] leading-[3rem]">
            Meet Our Team
          </h2>
          <p className="text-secondtext font-bold text-sm leading-5 max-w-[28rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center max-w-screen-lg">
          <TeamCard team={team} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 py-10">
        <h3 className="font-bold sm:text-[2.5rem] text-3xl leading-8">
          Start your 14 days free trial
        </h3>
        <p className="text-secondtext font-bold leading-4 tracking-wide max-w-[36rem]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="btn-primary">Try it free now</button>
      </div>
    </div>
  );
};
export default TeamPage;
