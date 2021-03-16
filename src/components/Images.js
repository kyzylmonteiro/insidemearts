import React from "react";
import Typewriter from "typewriter-effect";

const Images = () => {
  return (
    <div>
      <h2 className="heading">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "Inside Me, an effort to make the blind visualize the unseen."
              )
              .pauseFor(500)
              .deleteAll()
              .typeString("Welcome to Inside Me!")
              .start();
          }}
        />
      </h2>
    </div>
  );
};

const imgStyle = {
  position: "relative",
  width: "100%",
};

const spanStyle = {
  color: "white",
  letterSpacing: -1,
  background: "rgb(0, 0, 0)",
  background: "rgba(0, 0, 0, 0.7)",
  padding: 10,
};

export default Images;
