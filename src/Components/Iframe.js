import React from "react";
import Videos from "./Videos";
export default function Iframe() {
  const video_link = Videos.map((video) => {
    return (
      <iframe
        src={video.link}
        width="445"
        height="315"
        frameborder="10"
        allowfullscreen=""
      />
    );
  });
  return <div>{video_link}</div>;
}
