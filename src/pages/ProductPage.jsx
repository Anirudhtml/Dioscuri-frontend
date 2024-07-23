import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nabvar";
import "./ProductPage.css";

function ProductPage({ category, productData }) {

  const filteredData = productData.filter(
    (product) => product.category === category
  );
  return (
    <>
      <Nav color={'black'} /> 
      <div className="productOutsideContainer">
        <span className="containerTitle">{category.toUpperCase()}</span>
        <div className="productWrapper">
          {filteredData.map((product) => (
            <div className="productContainer">
              <Link to={`/product/${product._id}`}>
                <img
                  className="product-img"
                  src={product.product_img}
                  alt={product.name}
                />
              </Link>
              <h2 className="productName">{product.name}</h2>
              <h3 className="priceTag">$ {product.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
