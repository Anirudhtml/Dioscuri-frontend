import React, { useEffect, useState } from "react";

import Auth from "../auth/auth";
import { useCart } from "../contexts/CartContext";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav({ color }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showHamburger, setShowHamburger] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [searchResult, setSearchResult] = useState([]);
  const { cart } = useCart();

  function toggleHamburger() {
    setShowHamburger(!showHamburger);
    console.log("hambeerger pressed");
  }

  async function handleChange(event) {
    const query = event.target.value;

    if (query.length > 0) {
      try {
        const response = await fetch(`http://diocuri-backend-env.eba-hr2msycm.ca-central-1.elasticbeanstalk.com/search?q=${query}`);
        const result = await response.json();
        setSearchResult(result);
        console.log(result);
      } catch (err) {
        console.log("Error getting the response", err);
      }
    } else {
      setSearchResult([]);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPosition = document.documentElement.scrollHeight - 1150;
      const showPosition = 100;

      if (scrollPosition >= triggerPosition) {
        setIsVisible(false);
      } else if (window.screenY < showPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navContainer">
        <div className="navWrapper">
          {isMobile ? (
            <>
              <div className="mobileNavContent">
                <div className="hamburger" onClick={toggleHamburger}>
                  {showHamburger ? (
                    <>
                      <div class="closeDiv_1"></div>
                      <div class="closeDiv_2"></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div></div>
                      <div></div>
                    </>
                  )}
                </div>
                
                <Auth />
              </div>
              <div className={`mobileMenu ${showHamburger ? "open" : ""}`}>
                
                <ul>
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <a href="/Women">WOMEN</a>
                  </li>
                  <li>
                    <a href="/Men">MEN</a>
                  </li>
                  <li>
                    <a href="/About">ABOUT</a>
                  </li>
                  <li>
                    <a href="/Cart">CART({cart.length})</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <ul className={`navItemsLeft ${color}`}>
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <a href="/Men">MEN</a>
                  </li>
                  <li>
                    <a href="/Women">WOMEN</a>
                  </li>
                </ul>
              </div>
              <div className="searchBarContainer">
                <div>
                  <input
                    onChange={(e) => handleChange(e)}
                    className={`searchBar ${color}`}
                    placeholder="SEARCH"
                  />
                  <div className="searchContainer">
                    {searchResult.map((item) => (
                      <Link to={`/product/${item._id}`}>
                        <div className="searchItem">
                          <img
                            className="searchImg"
                            src={item.product_img}
                            alt={item.name}
                          />
                          <p>{item.name}</p>
                          <p>{item.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <ul className={`navItemsRight ${color}`}>
                <li>
                    <Auth />
                </li>
                <li>
                  <a href="/About">ABOUT</a>
                </li>
                <li>
                  <a href="/Cart">SHOPPING CART({cart.length})</a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
      {isMobile && showHamburger && (
        <div className="overlay" onClick={toggleHamburger}></div>
      )}
    </>
  );
}

export default Nav;
