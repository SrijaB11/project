import axios from "axios";

const API = axios.create({
  baseURL: "https://student-project-portal-backend-1.onrender.com",
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
