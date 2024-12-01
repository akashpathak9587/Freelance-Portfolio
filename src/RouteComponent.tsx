import App from "./App";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { RouteComponentProps } from "./types/Props";

const RouteComponent = ({ path }:RouteComponentProps) => {
  switch (path) {
    case "/":
      return <App />;
      break;
    case "/login":
      return <Login />;
      break;
    default:
      return <PageNotFound />;
  }
};

export default RouteComponent;
