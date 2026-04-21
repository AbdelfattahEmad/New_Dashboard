import { useQuery } from "@tanstack/react-query";
import { CreateProducts, getProducts } from "../services/productService";
import { useMutation } from "@tanstack/react-query";

// get all products
export const useProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });
};

// create product
export const useCreateProduct = () => {
  return useMutation({
    mutationFn: CreateProducts
  });
};
