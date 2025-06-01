import React from "react";
import "./BackToTop.css";

export default function BackToTop() {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <button className="back-to-top" onClick={scrollToTop}>
      回到最上方 ↑
    </button>
  );
}