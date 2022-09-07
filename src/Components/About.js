import React from "react";
import "./CSS/About.css";

import GUITARPNG from "../Images/electric-guitar.png";

export default function About() {
  return (
    <section>
      <h3 id="About" class="work">
        About
      </h3>
      <div class="container">
        <div class="cards">
          <img src="./images/play.png" class="im1" />
          <h3 class="addfont">Cover Songs</h3>
          <p class="pcards">
            Majority of my work is on cover songs. Love to sing great melodies
            made by some great people
          </p>
        </div>
        <div class="cards">
          <img src={GUITARPNG} />
          <h3 class="addfont">Stage Performances</h3>
          <p class="pcards">
            Done a lot of stage performances at various places. Always love the
            vibe on there with the audience cheering!
          </p>
        </div>
        <div class="cards">
          <img src="./images/music.png" class="im3" />
          <h3 class="addfont">Music Production</h3>
          <p class="pcards">
            Learnt a bit of music production. Can create own music. Can also mix
            &amp; master tracks with basic editing
          </p>
        </div>
      </div>
    </section>
  );
}
