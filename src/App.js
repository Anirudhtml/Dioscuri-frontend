import React, { useState, useEffect } from "react";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ItemPage from "./pages/ItemPage";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://diocuri-backend-env.eba-hr2msycm.ca-central-1.elasticbeanstalk.com/products", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Could not fetch the data");
        }

        const data = await response.json();
        setProductData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div id="col">
        <div id="img-wrap">
          <span class="loader"></span>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>Could not find the items: {error}</div>;
  }

  return (
    <Router>
      <div className="AppWrapper">
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Men"
              element={<ProductPage category="men" productData={productData} />}
            />
            <Route
              path="/Women"
              element={
                <ProductPage category="women" productData={productData} />
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/Cart" element={<Cart />} />
            <Route
              path="/product/:productId"
              element={<ItemPage productData={productData} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
