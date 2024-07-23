import React from "react";
import SmallNav from "./nav_small";
import { useUser } from "@clerk/clerk-react";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const { user } = useUser();
  const { cart, fetchCart } = useCart();

  async function handleDelete(productId) {
    try {
      const response = await fetch(
        `http://diocuri-backend-env.eba-hr2msycm.ca-central-1.elasticbeanstalk.com/cart/${user.id}/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("response bad");
      }

      const data = await response.json();
      console.log("Delete response:", data);

      // Refresh the cart after deletion
      fetchCart();
    } catch (err) {
      console.log("error occurred while deleting the product", err);
    }
  }

  if (!cart) return <div>Loading...</div>;

  return (
    <>
      <SmallNav />
      {
        (cart.length === 0 ? (
          <div className="emptyText">Your cart is empty</div>
        ) : (
          <div className="cartContainer">
            {cart.map((item) => (
              <div key={item._id} className="cartWrapper">
                <div>
                  <img
                    className="itemImage"
                    src={item.productId.product_img}
                    alt={item.productId.name}
                  />
                </div>
                <div className="productInfo">
                  <div className="productText">
                    <p>{item.productId.name}</p>
                    <p>$ {item.productId.price}</p>
                    <br />
                    <p>{item.size} Size</p>
                  </div>
                  <br />
                  <span
                    className="crossBtn"
                    onClick={() => handleDelete(item.productId._id)}
                  >
                    {" "}
                    ╳{" "}
                  </span>
                </div>
                <div className="addItem">
                  <button className="btn">-</button>
                  <p>{item.quantity}</p>
                  <button className="btn">+</button>
                </div>
              </div>
            ))}
          </div>
        ))
      }
    </>
  );
}

export default Cart;
