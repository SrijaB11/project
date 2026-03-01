// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api/projects",
// });

// // ✅ Attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export const addProject = (data) => {
//   return API.post("/", data);
// };

// export const getMyProjects = () => {
//   return API.get("/my");
// };

// export const getProjectById = (id) => {
//   return API.get(`/${id}`);
// };

// export const updateProject = (id, data) => {
//   return API.put(`/${id}`, data);
// };

// export const deleteProject = (id) => {
//   return API.delete(`/${id}`);
// };

import axios from "axios";

const API = "http://localhost:5000/api/projects";

const getAuthConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

export const addProject = (data) => {
  return axios.post(API, data, getAuthConfig());
};

export const getMyProjects = () => {
  return axios.get(`${API}/mine`, getAuthConfig());
};

export const getAllProjects = () => {
  return axios.get(API, getAuthConfig());
};

export const getProjectById = (id) => {
  return axios.get(`${API}/${id}`, getAuthConfig());
};

export const updateProject = (id, data) => {
  return axios.put(`${API}/${id}`, data, getAuthConfig());
};

export const deleteProject = (id) => {
  return axios.delete(`${API}/${id}`, getAuthConfig());
};
