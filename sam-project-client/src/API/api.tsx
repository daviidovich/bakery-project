import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllProducts = () => api.get(`/`);
export const getProductById = (id: any) => api.get(`/${id}`);
export const findProductByFlag = (flag: string) => api.get(`/${flag}`);
export const makeOrder = (payload: any) => api.post("/order", payload);

const apis = {
  getAllProducts,
  getProductById,
  findProductByFlag,
  makeOrder,
};

export default apis;
