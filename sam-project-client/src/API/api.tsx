import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const getAllProducts = () => api.get(`/`);
export const getProductById = (id: any) => api.get(`/${id}`);

const apis = {
  getAllProducts,
  getProductById
};

export default apis;
