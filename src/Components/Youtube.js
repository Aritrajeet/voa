import React from "react";
import Iframe from "./Iframe";
import "./CSS/Youtube.css";
export default function Youtube() {
  return (
    <div>
      <section id="Youtube">
        <h3 className="coversong">Youtube Covers</h3>
        <div className="yt">
          <Iframe />
        </div>
      </section>
    </div>
  );
}
