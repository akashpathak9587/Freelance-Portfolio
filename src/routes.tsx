import { Route, Routes } from "react-router";
import "./index.css";
import { AuthorizedRoute, DefaultRoute, LoginRoute } from "./utility/route";
import RouteComponent from "./RouteComponent";

const AppRoute = () => {
  return (
    <Routes>
      {AuthorizedRoute.map((item) => (
        <Route path={item.path} element={<RouteComponent path={item.path} />} />
      ))}
      {DefaultRoute.map((item) => (
        <Route path={item.path} element={<RouteComponent path={item.path} />} />
      ))}
      {LoginRoute.map((item) => (
        <Route path={item.path} element={<RouteComponent path={item.path} />} />
      ))}
    </Routes>
  );
};

export default AppRoute;
