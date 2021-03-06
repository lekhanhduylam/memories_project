import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile") || "").token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");

export const creatPost = (newPost: any) => API.post("/posts", newPost);

export const updatePost = (id: any, updatedPost: any) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id: any) => API.delete(`/posts/${id}`);

export const likePost = (id: any) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData: any) => API.post("/users/signin", formData);

export const signUp = (formData: any) => API.post("/users/signup", formData);
