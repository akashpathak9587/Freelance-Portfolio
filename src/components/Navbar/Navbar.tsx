import { useContext } from "react";
import { Link, useLocation } from "react-router";
import { AuthorizedRoute, DefaultRoute, LoginRoute } from "../../utility/route";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { AppContext } from "../../context/UserContext/UserContext";

const Navbar = () => {
  const location = useLocation();
  const { appTitle, loggedIn } = useContext(AppContext);
  const { isMobile } = useContext(ScreenContext);
  return (
    <div
      className={`navbar-container flex-container justify-around bg-gray-800 p-4 shadow-md ${
        isMobile && "flex-col justify-center items-center gap-[18px] whitespace-nowrap text-[3vmin]"
      }`}>
      <div className="title text-white text-xl">{appTitle}</div>
      <div className="links flex text-white">
        {loggedIn &&
          AuthorizedRoute.map((item) => (
            <div
              key={item.title}
              className="login px-4 hover:text-[#b9a1a2] transition-all duration-200">
              <Link to={item.path} state={{ from: location }}>
                {item.title}
              </Link>
            </div>
          ))}
        {!loggedIn &&
          LoginRoute.map((item) => (
            <div
              key={item.title}
              className="login px-4 hover:text-[#b9a1a2] transition-all duration-200">
              <Link to={item.path} state={{ from: location }}>
                {item.title}
              </Link>
            </div>
          ))}
        {DefaultRoute.map((item) => (
          <div
            key={item.title}
            className="login px-4 hover:text-[#b9a1a2] transition-all duration-200">
            <Link to={item.path} state={{ from: location }}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
