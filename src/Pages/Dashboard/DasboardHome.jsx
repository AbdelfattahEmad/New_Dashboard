import React from "react";
import ProductCard from "../../Components/Ui/ProductCard";

const DasboardHome = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <ProductCard
        title="Laptop"
        description="Powerful laptop for developers"
        price="1200"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      />

      <ProductCard
        title="Headphones"
        description="High quality sound headphones"
        price="200"
        image="https://images.unsplash.com/photo-1518441902112-68d5f03c1a7b"
      />
      <ProductCard
        title="Laptop"
        description="Powerful laptop for developers"
        price="1200"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      />

      <ProductCard
        title="Headphones"
        description="High quality sound headphones"
        price="200"
        image="https://images.unsplash.com/photo-1518441902112-68d5f03c1a7b"
      />
      
      <ProductCard
        title="Laptop"
        description="Powerful laptop for developers"
        price="1200"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      />

      <ProductCard
        title="Headphones"
        description="High quality sound headphones"
        price="200"
        image="https://images.unsplash.com/photo-1518441902112-68d5f03c1a7b"
      />
      <ProductCard
        title="Laptop"
        description="Powerful laptop for developers"
        price="1200"
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      />

      <ProductCard
        title="Headphones"
        description="High quality sound headphones"
        price="200"
        image="https://images.unsplash.com/photo-1518441902112-68d5f03c1a7b"
      />
    </div>
  );
};

export default DasboardHome;
