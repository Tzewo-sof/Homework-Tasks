// ProductCard.jsx
import React from "react";
import "./ProductCard.css"; // optional CSS

function ProductCard({ name, price, image, inStock, isFeatured }) {
  const isPremium = price > 100;

  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      {/* Image only if image exists */}
      {image && (
        <img
          src={image}
          alt={name}
          className="product-image"
        />
      )}

      <h3>{name}</h3>
      <p>Price: ${price}</p>

      {/* Out of Stock badge */}
      {!inStock && <span className="badge badge-out">Out of Stock</span>}

      {/* Featured label */}
      {isFeatured && <span className="badge badge-featured">Featured</span>}

      {/* Premium product text */}
      {isPremium && <p className="premium-text">Premium Product</p>}
    </div>
  );
}

export default ProductCard;