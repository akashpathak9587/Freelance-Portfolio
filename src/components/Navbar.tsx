import { useContext } from "react";
import { Link, useLocation } from "react-router";
import { AppContext } from "../context/UserContext";
import { AuthorizedRoute, DefaultRoute, LoginRoute } from "../utility/route";

const Navbar = () => {
  const location = useLocation();
  const { appTitle, loggedIn } = useContext(AppContext);
  return (
    <div className="navbar-container flex bg-gray-800 p-4 justify-between shadow-md rounded-bl-lg rounded-tr-lg m-16">
      <div className="title text-white text-xl">{appTitle}</div>
      <div className="links flex text-white">
        {loggedIn &&
          AuthorizedRoute.map((item) => (
            <div className="login px-4 hover:text-blue-600 transition-all duration-200">
              <Link to={item.path} state={{ from: location }}>
                {item.title}
              </Link>
            </div>
          ))}
        {!loggedIn &&
          LoginRoute.map((item) => (
            <div className="login px-4 hover:text-blue-600 transition-all duration-200">
              <Link to={item.path} state={{ from: location }}>
                {item.title}
              </Link>
            </div>
          ))}
        {DefaultRoute.map((item) => (
          <div className="login px-4 hover:text-blue-600 transition-all duration-200">
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
