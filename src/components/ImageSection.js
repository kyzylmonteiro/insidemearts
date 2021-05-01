import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

const ImageSection = (props) => {
  return (
    <div>
      <div
        className="ImageSectionHeading"
        style={{ paddingTop: "10%", paddingBottom: "50px" }}
      >
        <h2 className="sectionHeading">{props.heading}</h2>
      </div>
      <div className="ImageSectionRow">
        <div className="ImageSectionContent">
          <Fade up distance="20%" duration={1000}>
            {/* <p
              className="sectionContent fontSection"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              {props.content}
            </p> */}

            {props.content.para.map((item) => {
              return (
                <p
                  className="sectionContent fontSection"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  {item}
                </p>
              );
            })}

            {props.content.points !== [] &&
              Object.keys(props.content.points).map((key, i) => (
                <div>
                  <h3>{key}</h3>
                  <ul>
                    {props.content.points[key].map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              ))}
          </Fade>
          {/* </Col>
        <Col className="justify-content-center" md={4}> */}
        </div>
        <div className="imageSpacerImageSection">
          <Fade up distance="20%" duration={1000} className="react-revealImage">
            <Image
              src={props.imagesrc}
              rounded
              fluid
              style={{
                padding: "30px",
              }}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
