import React, { createContext, useState, useContext, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const { user } = useUser();

    async function fetchCart() {
        if (!user) return;
        try {
          const response = await fetch(`http://diocuri-backend-env.eba-hr2msycm.ca-central-1.elasticbeanstalk.com/cart/${user.id}`);
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          setCart(data.items);
        } catch (err) {
          console.log("error fetching data", err);
        }
      }
    
      useEffect(() => {
        fetchCart();
      }, [user, fetchCart]);

    return (
        <CartContext.Provider value={{ cart, setCart, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);