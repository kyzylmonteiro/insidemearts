import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Vision = () => {
  return (
    <div style={body}>
      <Container>
        <Row>
          <Col>
            <h2>Our Vision</h2>
            <p style={{ fontSize: 17, color: "grey", textAlign: "left" }}>
              India is home to the largest number of visually impaired people in
              the world. Out of 45 million blind people across the globe, over
              15 million are from India. Delhi has 19 schools and centers
              serving the blind. Our mission is to cover remote and deprived
              schools of India. The blind is living a mundane life based on
              donation and sympathy. It is our objective to provide empowerment
              and a sense of being so that they can cope in the world outside
              these premises. Inside Me teaches drawing to empower these youth.
              Drawing helps them in academic subjects, leading to more academic
              success. Increased exposure to drawing will help the blind
              understand and represent space concept and symbolic relations.
              Visual art or drawing improves both academic achievement and
              performance on standardized tests. Unfortunately, drawing as a
              subject for students with visual impairment has not been
              incorporated in India. But we hope to change that. Once the
              subject is established.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const body = {
  top: 400,
  left: 20,
  backgroundImage: `url("https://via.placeholder.com/1000")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const containerStyle = {
  left: 100,
};

export default Vision;
