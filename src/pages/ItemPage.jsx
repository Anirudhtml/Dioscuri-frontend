import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nabvar";
import "./ItemPage.css";
import { useUser, SignIn } from "@clerk/clerk-react";

function ItemPage({ productData }) {
  const { productId } = useParams();
  const { user } = useUser();

  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showSignInPopup, setSignInPopup] = useState(false);
  const [selectedSize, setSize] = useState(null)


  useEffect(() => {
    if (productData) {
      const foundProduct = productData.find((p) => p._id === productId);
      setProduct(foundProduct);
    } else {
      console.log("No product data found");
    }
  }, [productData, productId]);

  async function handleAdd(productId, userId, quantity, size) {
    try {
      const response = await fetch("https://dioscuri-backend-d32656647d57.herokuapp.com/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, userId, quantity, size }),
      });

      if (!response.ok) {
        console.log(response.json());
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Cart updated", data);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.log("Error adding to cart", err);
    }
  }

  function handleSizeClick(size) {
    setSize(`${size}`)
  }

  if (!product) {
    return <div>No Product Found</div>;
  }

  return (
    <>
      <Nav color={`black`}/>
      <div className="ItemContainer">
        <div className="leftComponent">
          <img className="itemImage" src={product.product_img} alt="Product" />
        </div>
        <div className="rightComponentMain">
          <div className="rightComponent">
            <span>FEW ITEMS LEFT</span>
            <br />
            <span className="itemName">
              <strong>{product.name}</strong>
            </span>
            <span>$ {product.price}</span>
            <br />
            <span>
              {product.description}
            </span>
            <br />
            <br />
          </div>
          <hr />
          <div className="rightContainerDown">
            <span>BLACK</span>
            <div className="sizeContainer">
              <button onClick={() => handleSizeClick('S')} className={`size ${selectedSize === 'S' ? 'pressed': ""}`}>S</button>
              <button onClick={() => handleSizeClick('M')} className={`size ${selectedSize === 'M' ? 'pressed': ""}`}>M</button>
              <button onClick={() => handleSizeClick('L')} className={`size ${selectedSize === 'L' ? 'pressed': ""}`}>L</button>
              <button onClick={() => handleSizeClick('XL')} className={`size ${selectedSize === 'XL' ? 'pressed': ""}`}>XL</button>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                if (user && user.id) {
                  handleAdd(product._id, user.id, 1, selectedSize);
                } else {
                  setSignInPopup(true);
                }
              }}
              className="addButton"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {showPopup ? <div className="popup">Item added to the Cart!</div> : ""}
      {showSignInPopup && (
        <div className="signInPopup">
          <div className="signInContent">
            <button className="closeButton" onClick={() => setSignInPopup(false)}>No, I'm only here to Look</button>
            <SignIn />
          </div>
        </div>
      )}
    </>
  );
}

export default ItemPage;
