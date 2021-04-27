import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

const ImageSection = (props) => {
  return (
    <div>
      <Row className="justify-content-md-center" style={{ paddingTop: "10%" }}>
        <Col>
          <Fade up distance="20%" duration={1000}>
            <h2 className="sectionHeading">{props.heading}</h2>
            <Fade up distance="20%" duration={1000}>
            <Image src={props.imagesrc} rounded fluid style={{float: "right", maxWidth:"25vw", maxHeight:"40vh" , padding:"30px"}} />
          </Fade>
            <p className="sectionContent" style={{textAlign:"justify", textJustify: "inter-word"}}>{props.content}</p>
          </Fade>
        {/* </Col>
        <Col className="justify-content-center" md={4}> */}
          
        </Col>
      </Row>
    </div>
  );
};

export default ImageSection;
