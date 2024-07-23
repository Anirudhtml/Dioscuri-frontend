import React, { useEffect, useState } from "react";
import "./newsletter.css";

function NewsLetter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPosition = document.documentElement.scrollHeight - 100;
      const hidePosition = window.innerHeight + 1200;

      if (scrollPosition >= triggerPosition) {
        setIsVisible(true);
      } else if (window.scrollY < hidePosition) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`newsLetterContainer ${isVisible ? "visible" : ""}`}>
      <div className="newsletterWrapper">
        <span>SIGN UP FOR OUR NEWSLETTER</span>
        <br />
        <div className="socialLinks">
          <span className="links">TIKTOK</span>
          <span className="links">INSTAGRAM</span>
          <span className="links">FACEBOOK</span>
          <span className="links">X</span>
          <span className="links">YOUTUBE</span>
          <span className="links">SPOTIFY</span>
        </div>
        <br />
        <div className="termsLinks">
          <span>TERMS OF USE</span>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
