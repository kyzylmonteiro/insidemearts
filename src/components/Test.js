import React, { useState } from "react";
import Gallery from "./Gallery";
import { photosMedia } from "./photosMedia";
// import "./Test.css";

const Test = () => {
  return (
    <div className="flexbox-container">
      {photosMedia.map((data) => {
        return <Gallery data={data} />;
      })}
    </div>
  );
};

export default Test;