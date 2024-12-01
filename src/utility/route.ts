import { Route } from "../types/type";

export const DefaultRoutes: Route[] = [
  {
    path: "/contact",
    title: "Contact Us",
  },
  {
    path: "/about",
    title: "About Us",
  },
];

export const AuthorizedRoute: Route[] = [
  {
    path: "/",
    title: "Home",
  },
];

export const LoginRoute: Route[] = [
  {
    path: "/login",
    title: "Login",
  },
  {
    path: "/signup",
    title: "Signup",
  },
];
