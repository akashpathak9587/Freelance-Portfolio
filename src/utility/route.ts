import { Route } from "../types/type";

export const AuthorizedRoute: Route[] = [
  {
    path: "/",
    title: "Home",
  },
];

export const UnauthorizedRoute: Route[] = [
  {
    path: "/",
    title: "Home"
  }
]

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

export const HashRoute: Route[] = [
  {
    path: "#skills",
    title: "Skills",
  },
  {
    path: "#project",
    title: "Project",
  },
  {
    path: "#contact",
    title: "Contact Me",
  },
  {
    path: "#about",
    title: "About Me",
  },
];
