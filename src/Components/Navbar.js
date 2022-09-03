import React from "react";
import "./CSS/Navbar.css";
export default function Navbar() {
  const y_name = "Aritra";
  return (
    <nav className="navbar">
      <h1 class="logo">
        <span class="color-text"> Voice of </span>
        {y_name}
      </h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#Youtube">YouTube Covers</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
