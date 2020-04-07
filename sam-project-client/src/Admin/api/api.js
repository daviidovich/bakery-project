import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/admin"
});

//export const authoForm = () => api.get(`/`);
export const makeAutho = payload => api.post(`/`, payload);
export const getHomePage = () => api.get(`/admhome`);

export const insertProduct = payload => api.post(`/admhome/product`, payload);
export const getAllProducts = () => api.get(`/admhome/products`);
export const updateProductById = (id, payload) =>
  api.put(`/admhome/product/${id}`, payload);
export const deleteProductById = id => api.delete(`/admhome/product/${id}`);
export const getProductById = id => api.get(`/admhome/product/${id}`);

const apis = {
  //authoForm,
  makeAutho,
  getHomePage,
  insertProduct,
  getAllProducts,
  deleteProductById,
  getProductById
};

export default apis;
