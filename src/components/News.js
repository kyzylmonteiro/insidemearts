import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewsGallery from "./NewsGallery";
import { photosNews } from "./photosNews";
import "./News.css";
import Gallery from "react-grid-gallery";
import Fade from "react-reveal/Fade";

import sanityClient from "../client.js";


export default function News() {

  function openLink(index) {
    window.open(photosNews[index].link, "_blank");
  }

  const [pageGallery, setPageGallery] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "newsMediaPage"]{
          mediaGallery[]{"thumbnailCaption":caption,"src":image.asset->url,"thumbnail":image.asset->url, "link":link, "thumbnailWidth":width, "thumbnailHeight":height }}`
      )
      .then((data) => setPageGallery(data))
      .catch(console.error);
  }, []);


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
      {/* <Gallery
        enableLightbox={false}
        rowHeight={360}
        margin={4}
        onClickThumbnail={openLink}
        enableImageSelection={false}
        backdropClosesModal
        images={photosNews}
        enableImageSelection={false}
      /> */}


      {pageGallery &&
          pageGallery.map((post, index) => (
            <Gallery
          images={post.mediaGallery}
          enableLightbox={true}
          rowHeight={360}
          margin={4}
          enableImageSelection={false}
          onClickThumbnail={openLink}
          // maxRows={3}
          backdropClosesModal
          // currentImage={3}
          // isOpen={ true}
        />
      ))}


    </div>
    </>
  );
}
