const HomeCard = () => {
  return (
    <div
      className="hero-card w-[90vw] h-[69vh] relative flex mx-auto text-gray-800 text-7xl shadow-xl *:text-shadow-relief overflow-hidden rounded-xl bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.2),  rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
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
