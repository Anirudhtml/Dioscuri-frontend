import React, { useEffect } from "react";
import "./title.css";

function Title() {
  useEffect(() => {
    const title = document.querySelector(".title");
    title.style.opacity = "1";
  });

  return (
    <div className="titleContainer">
      <div className="titleWrapper">
        <h1 className="title">DIOSCURI.</h1>
      </div>
    </div>
  );
}

export default Title;
