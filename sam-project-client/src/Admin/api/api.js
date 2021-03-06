import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/admin",
});

//export const authoForm = () => api.get(`/`);
export const makeAutho = (payload) => api.post(`/`, payload);
export const getHomePage = () => api.get(`/gethome`);

export const insertProduct = (payload) => api.post(`/product`, payload);
export const getAllProducts = () => api.get(`/list`);
export const updateProductById = (id, payload) =>
  api.put(`/product/${id}`, payload);
export const deleteProductById = (id) => api.delete(`/product/${id}`);
export const getProductById = (id) => api.get(`/product/${id}`);

export const getOrders = () => api.get(`/orders`);
export const deleteOrderById = (id) => api.delete(`/order/${id}`);
export const getOrderById = (id) => api.get(`/order/${id}`);

const apis = {
  //authoForm,
  makeAutho,
  getHomePage,
  insertProduct,
  getAllProducts,
  deleteProductById,
  getProductById,
  updateProductById,
  getOrders,
  deleteOrderById,
  getOrderById,
};

export default apis;
