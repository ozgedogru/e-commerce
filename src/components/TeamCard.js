const TeamCard = ({ team }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {team.map((member, index) => (
        <div className="flex flex-col justify-center gap-8 shadow-md">
          <div className="flex w-76 h-56">
            <img className="w-full h-full" src={member.img} alt="team1"></img>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-md font-bold leading-6 ">Username</h5>
            <h6 className="text-secondtext font-bold text-sm leading-5">
              Profession
            </h6>
            <div className="text-primary flex justify-center">
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
      ))}
    </div>
  );
};
export default TeamCard;
