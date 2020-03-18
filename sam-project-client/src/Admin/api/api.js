import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

//export const authoForm = () => api.get(`/`);
export const makeAutho = () => api.post(`/`);
export const getHomePage = () => api.get(`/`);

export const insertProduct = payload => api.post(`/product`, payload);
export const getAllProducts = () => api.get(`/products`);
export const updateMovieById = (id, payload) =>
  api.put(`/products/${id}`, payload);
export const deleteProductById = id => api.delete(`/product/${id}`);
export const getProductsById = id => api.get(`/product/${id}`);

const apis = {
  //authoForm,
  makeAutho,
  getHomePage,
  insertProduct,
  getAllProducts,
  deleteProductById,
  getProductsById
};

export default apis;
