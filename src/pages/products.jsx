import React, { useState } from "react";
import "./products.css";

function Product() {
  const featured_data = [
    {
      id: 1,
      name: "Green suit",
      image: "/featured_imgs/img_1.jpg",
      price: 699,
    },
    {
      id: 2,
      name: "Shirt",
      image: "/featured_imgs/img_2.png",
      price: 399,
    },
    {
      id: 3,
      name: "Trench Coat",
      image: "/featured_imgs/img_3.jpg",
      price: 873,
    },
    {
      id: 4,
      name: "Blazer",
      image: "/featured_imgs/img_4.jpg",
      price: 1221,
    },
    {
      id: 5,
      name: "Pants",
      image: "/featured_imgs/img_5.jpg",
      price: 643,
    },
  ];

  const [featurePopup, setfeaturePopup] = useState(false)

  function handleClick() {
    setfeaturePopup(true)

    setTimeout(() => setfeaturePopup(false), 3000)
  }

  return (
    <div className="productOutsideContainer">
      <span className="containerTitle">Featured Products</span>
      <div className="productWrapper">
        {featured_data.map((item) => (
          <div key={item.id} className="productContainer">
            <img onClick={handleClick} className="product-img" alt={item.name} src={item.image}></img>
            <h2 className="productName">{item.name}</h2>
            <h3 className="priceTag">$ {item.price}</h3>
          </div>
        ))}
      </div>

      {featurePopup ? <div className="featuredProdcontainer">
        <div className="featuredProdWrapper">
            <span id="nvText">Products are not available yet.</span>
        </div>
      </div> : ''}
    </div>
  );
}

export default Product;
