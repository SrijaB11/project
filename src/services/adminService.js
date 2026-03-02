// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export const getStudents = () => API.get("/admin/students");

// export const approveStudent = (id) => API.put(`/admin/students/${id}/approve`);
import axios from "axios";

const API = axios.create({
  baseURL: "https://student-project-portal-backend-1.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const getStudents = () => API.get("/admin/students");

export const approveStudent = (id) => API.put(`/admin/students/${id}/approve`);

export const deleteStudent = (id) => API.delete(`/admin/students/${id}`);

export const setProjectPriority = (id, priority) =>
  API.put(`/admin/projects/${id}/priority`, { priority });

export const deleteProjectByAdmin = (id) => API.delete(`/admin/projects/${id}`);
