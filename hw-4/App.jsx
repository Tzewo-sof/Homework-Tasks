// App.jsx
import React from "react";
import ProductList from "./ProductList";
import products from "./products";

function App() {
  return (
    <div className="App">
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;