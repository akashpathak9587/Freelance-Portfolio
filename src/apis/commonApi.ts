import axios from "axios";
import { mailBody } from "../types/api";

export const commonApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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
