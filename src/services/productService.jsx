import api from "../api/axios";

export const getProducts = async () => {
  const response = await api.get("//products?page=1&limit=10&keyword=laptop");
  console.log(response.data);
  return response.data;
};
