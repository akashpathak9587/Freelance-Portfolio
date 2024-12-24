import LinkedInBadge from "../LinkedInBadge/LinkedInBadge";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="title text-[2.5rem] tracking-widest text-5xl text-[#b9a1a2] text-center">Contact</div>
      <div className={`h-[40vh] flex items-center justify-center gap-24`}>
        <div className="profile-info leading-9">
          <div>
            <span className="text-[#b9a1a2]">Name:</span> Akash P.
          </div>
          <div>
            <span className="text-[#b9a1a2]">Contry:</span> India
          </div>
          <div>
            <span className="text-[#b9a1a2]">Open to Work:</span> Full Stack
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
