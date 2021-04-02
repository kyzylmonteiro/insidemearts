import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const ImageSection = (props) => {
  return (
    <div>
        <Row className="justify-content-md-center" >
            <Col className="justify-content-center" md={4}>
            <Image src="https://via.placeholder.com/300" rounded fluid/>
            </Col>
            <Col md={8}>
            <h2 className="sectionHeading">{props.heading}</h2>
            <span className="sectionContent">
              {props.content}
            </span>
            </Col>
        </Row>
       
    </div>
  );
};


export default ImageSection;
{/* backgroundImage: `url("https://via.placeholder.com/1000")`, */}