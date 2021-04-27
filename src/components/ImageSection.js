import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

const ImageSection = (props) => {
  return (
    <div>
      <Row className="justify-content-md-center" style={{ paddingTop: "10%" }}>
        <Col md={8}>
          <Fade up distance="20%" duration={1000}>
            <h2 className="sectionHeading">{props.heading}</h2>
            <p className="sectionContent">{props.content}</p>
          </Fade>
        </Col>
        <Col className="justify-content-center" md={4}>
          <Fade up distance="20%" duration={1000}>
            <Image src={props.imagesrc} rounded fluid />
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default ImageSection;
