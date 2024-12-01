import "./HomeCard.css";
const HomeCard = () => {
  return (
    <div className="hero-card w-[90vw] h-[69vh] relative flex mx-auto text-gray-800 text-7xl shadow-2xl *:text-shadow-relief overflow-hidden rounded-xl">
      {/* <BirdAnimation /> */}
      <div className="card-1 w-[100%] pr-4 flex items-center justify-center rounded-tl-xl rounded-bl-lg">
        Akash P.
      </div>
      {/* <div className="card-1 w-[50%] text-left pl-4 flex items-center justify-start rounded-tr-xl rounded-br-lg">
        P.
      </div> */}
      <div className="title absolute text-3xl bottom-[39%] right-[30%] italic">
        Full Stack Developer
      </div>
    </div>
  );
};

export default HomeCard;
