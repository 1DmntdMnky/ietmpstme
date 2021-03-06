import React from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import "../App";
/* import { Link as ScrollLink } from "react-scroll"; */
/* import { escapeSelector, isWindow } from "jquery"; */

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  //return null;
  return (
    /* <ScrollLink to="toTop" className="upIcon" spy={true} smooth={true}> */
    <div
      className="toTopButton"
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0,
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behaviour: "smooth" });
      }}
    >
      <div className="upIcon">
        <box-icon name="up-arrow" color="white" crossOrigin></box-icon>
      </div>
    </div>
    /* </ScrollLink> */
  );
}
