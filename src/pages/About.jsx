import React from "react";
import SmallNav from "./nav_small";
import "./About.css";

function About() {
  return (
    <>
      <SmallNav />
      <div className="aboutContainer">
        <div className="aboutContainerWrapper">
          <div>
            <h2 className="heading">About Dioscuri</h2>
            <p className="subPara">
              Welcome to Dioscuri, your ultimate destination for timeless
              fashion and elegant style. Our brand name, Dioscuri, is inspired
              by the Greek mythological twins, Castor and Pollux, who symbolize
              strength, unity, and duality. Just as these legendary figures
              balanced power with grace, we aim to harmonize classic fashion
              with contemporary elegance.
            </p>
          </div>
          <div>
            <h2 className="heading">Founder</h2>
            <span className="subPara">
              Dioscuri was founded by Anirudh Gupta, a full-stack developer with
              extensive experience in software development. Anirudh's technical
              expertise and visionary approach have been instrumental in shaping
              our online presence and ensuring a seamless shopping experience
              for our customers. His passion for fashion and commitment to
              quality have driven the creation of a brand that stands for
              excellence and distinction.
            </span>
          </div>
          <div>
            <h2 className="heading">Vision</h2>
            <span className="subPara">
              Our journey began with a passion for reviving long-lost fashion
              trends that exude sophistication and charm. At Dioscuri, we
              believe in the enduring appeal of vintage styles and the
              importance of quality craftsmanship. Our collections are
              thoughtfully curated to offer a blend of heritage and modernity,
              ensuring that every piece tells a story of elegance and
              refinement. Our vision is to bring back the beauty of bygone eras
              while infusing them with a fresh, modern twist. We are dedicated
              to providing our customers with unique, high-quality pieces that
              make a statement and withstand the test of time. Thank you for
              being a part of our journey. Together, let's celebrate the art of
              fashion and embrace the elegance of Dioscuri.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
