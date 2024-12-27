import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// import { AllRoute, AuthorizedRoute, DefaultRoute, LoginRoute, PortfolioRoute } from "../../utility/route";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { AppContext } from "../../context/UserContext/UserContext";
import { HashRoute, UnauthorizedRoute } from "../../utility/route";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const location = useLocation();
  const { appTitle } = useContext(AppContext);
  const { isMobile } = useContext(ScreenContext);
  const handleNavClick = (title: string) => {
    if (title === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className={` fixed top-0 left-0 right-0 z-10 navbar-container flex-container justify-around p-4 bg-[#bda6a6] ${
        isMobile &&
        "flex-col justify-center items-center gap-[18px] whitespace-nowrap text-[3vmin]"
      }`}>
      <div className="title text-white text-xl">{appTitle}</div>
      <div className="links flex text-white">
        {UnauthorizedRoute.map((item) => (
          <div
            key={item.title}
            className="login px-4 hover:text-[#333333] transition-all duration-300">
            <Link
              to={item.path}
              state={{ from: location }}
              onClick={() => handleNavClick(item.title)}>
              {item.title}
            </Link>
          </div>
        ))}

        {HashRoute.map((item) => (
          <div
            key={item.title}
            className="login px-4 hover:text-[#333333] transition-all duration-300">
            <HashLink to={item.path} smooth>
              {item.title}
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
