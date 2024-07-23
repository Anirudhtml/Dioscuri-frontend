import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { useUser } from "@clerk/clerk-react";

const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const { user } = useUser();

    const fetchCart = useCallback(async () => {
        if (!user) return;
        try {
          const response = await fetch(`https://diocuri-backend-env.eba-hr2msycm.ca-central-1.elasticbeanstalk.com/cart/${user.id}`);
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          setCart(data.items);
        } catch (err) {
          console.log("error fetching data", err);
        }
      }, [user]); // Add `user` as a dependency so it updates when `user` changes
    
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
