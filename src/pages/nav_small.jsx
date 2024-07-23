import React from "react";
import './nav_small.css';
import { useCart } from "../contexts/CartContext";

function SmallNav() {
    const { cart } = useCart();

    return (
        <div className="smallNavContainer">
            <div>
                <a href="/">HOME</a>
            </div>
            <div className="titleNav">
                <a id="titleNav" href="/">DIOSCURI</a>
            </div>
            <div>
                <a href="/Cart">CART({cart.length})</a>
            </div>
        </div>
    )
}

export default SmallNav;