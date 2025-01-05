import axios from "axios";
import { mailBody } from "../types/api";

export const commonApi = axios.create({
  baseURL: "http://localhost:3000/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const getUsers = async () => {
//     const response = await commonApi.get("/users");
//     return response.data;
// };

export const sendMail = async (body: mailBody) => {
  const response = await commonApi.post("/send-email", body);
  return response;
};
