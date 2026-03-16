import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../Components/Ui/ProductCard";
import { useProduct } from "../../hooks/getProuduct";

const DasboardHome = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: useProduct
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {data.map(product =>
        <ProductCard
          key={product.id}
          title={product.title}
          description="Powerful laptop for developers"
          price="1200"
          image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        />
      )}
    </div>
  );
};

export default DasboardHome;
