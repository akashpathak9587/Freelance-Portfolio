import "./index.css";
import { AuthorizedRoute, LoginRoute, UnauthorizedRoute } from "./utility/route";
import RouteComponent from "./RouteComponent";
import { Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      {AuthorizedRoute.map((item) => (
        <Route path={item.path} element={<RouteComponent path={item.path} />} />
      ))}
      {UnauthorizedRoute.map((item) => (
        <Route path={item.path} element={<RouteComponent path={item.path} />} />
      ))}
      {LoginRoute.map((item) => (
        <Route path={item.path} element={<RouteComponent path={item.path} />} />
      ))}
    </Routes>
  );
};

export default AppRoute;
