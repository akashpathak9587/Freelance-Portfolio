import LinkedInBadge from "../LinkedInBadge/LinkedInBadge";

const Footer = () => {
  return (
    <div className="flex flex-col" id="about">
      <div className="title text-[2.5rem] tracking-widest text-5xl text-[#b9a1a2] text-center">About Me</div>
      <div className={`h-[40vh] flex items-center justify-center gap-24`}>
        <div className="profile-info leading-9 text-center">
          <div>
            <span className="text-[#b9a1a2]">Name:</span> Akash P.
          </div>
          <div>
            <span className="text-[#b9a1a2]">Contry:</span> India
          </div>
          <div>
            <span className="text-[#b9a1a2]">Open to Work As:</span> Full Stack
            Developer
          </div>
          <div>
            <span className="text-[#b9a1a2]">Gmail:</span> aakapa95@gmail.com
          </div>
        </div>
        <div className="quick-link">
          <LinkedInBadge />
        </div>
      </div>
    </div>
  );
};

export default Footer;
