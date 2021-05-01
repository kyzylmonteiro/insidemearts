import React from "react";
import Typewriter from "typewriter-effect";

const Quote = (props) => {
  return (
    <div>
      <h2 className="heading">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "They don't see dreams, They hear dreams. We make them draw their dreams."
              )
              .pauseFor(800)
              .deleteAll()
              .typeString(
                "Inside Me, an effort to make the blind visualize the unseen."
              )
              .start();
          }}
        />
      </h2>
    </div>
  );
};

export default Quote;
