// ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  // If no products
  if (!products || products.length === 0) {
    return <p>No products available at the moment.</p>;
  }

  // There are products: render a list of cards
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}          // key is important
          name={product.name}
          price={product.price}
          image={product.image}
          inStock={product.inStock}
          isFeatured={product.isFeatured}
        />
      ))}
    </div>
  );
}

export default ProductList;