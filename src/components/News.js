import React, { useState } from "react";
import PropTypes from "prop-types";
import NewsGallery from "./NewsGallery";
import { photosNews } from "./photosNews";
import "./News.css";
import Gallery from "react-grid-gallery";
import Fade from "react-reveal/Fade";

export default function News() {

  function openLink(index) {
    window.open(photosNews[index].link, "_blank");
  }

  return (
    <>
    <Fade up distance="20%" duration={1000} delay={300}>
        <h2 className="sectionHeading">In the News</h2>
      </Fade>
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}
    >
      <Gallery
        enableLightbox={false}
        rowHeight={360}
        margin={4}
        onClickThumbnail={openLink}
        enableImageSelection={false}
        backdropClosesModal
        images={photosNews}
        enableImageSelection={false}
      />
    </div>
    </>
  );
}
