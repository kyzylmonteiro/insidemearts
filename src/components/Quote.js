import React from "react";
import Typewriter from "typewriter-effect";

const Quote = () => {
  return (
    <div>
      <h2 className="heading" style={{height:"35vh", fontSize:"8vh"}}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "Inside Me, an effort to make the blind visualize the unseen."
              )
              .pauseFor(500)
              .deleteAll()
              .typeString("They don't see dreams, They hear dreams. <br/><br/> ~Shivani Ma'am")
              .start();
          }}
        />
      </h2>
    </div>
  );
};

export default Quote;
