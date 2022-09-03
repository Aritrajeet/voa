import React from "react";
import "./CSS/Home.css";
export default function Home() {
  const name = "Aritra Chatterjee";
  const tagline = "Never underestimate an engineer with a mic ; )";
  const about_section = "https://www.youtube.com/c/AritraChatterjee/about";
  return (
    <header>
      <div>
        <h1 className="t1">{name}</h1>
        <p className="t2">{tagline}</p>
        <button class="btn">
          <a href={about_section} target="_blank">
            Know More
          </a>
        </button>
      </div>
    </header>
  );
}
