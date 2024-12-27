import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { RouteComponentProps } from "./types/Props";

const RouteComponent = ({ path }:RouteComponentProps) => {
  switch (path) {
    case "/":
      return <Home />;
    case "/login":
      return <Login />;
    default:
      return <PageNotFound />;
  }
};

export default RouteComponent;