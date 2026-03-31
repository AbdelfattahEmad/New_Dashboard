import api from "../api/axios";

// get all products
export const getProducts = async () => {
  const response = await api.get("/products?page=1&limit=10&keyword=laptop");
  return response.data;
};

// create product
export const CreateProducts = async () => {
  const response = await api.post("//products?page=1&limit=10&keyword=laptop");
  return response.data;
};
