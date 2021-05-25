import React from "react";

const Gallery = ({ data }) => {
  const { src, thumbnail, caption, link } = data;

  return (
    <div style={{ margin: 10, width: 200 }}>
      <a href={link} target="_blank">
        <div>
          <img alt={thumbnail} src={src} width="200" height="250"></img>
        </div>
      </a>
      <p>{caption}</p>
    </div>
  );
};

export default Gallery;