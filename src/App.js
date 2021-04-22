import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header.js";
import Quote from "./components/Quote.js";
import ImageSection from "./components/ImageSection.js";
import Feed from "react-instagram-authless-feed";
import Gallery from "react-grid-gallery";
import { data } from "./data";
import { photosMedia } from "./components/photosMedia";
import { latestPhotos } from "./components/latestPhotos";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Footer from "./components/Footer";

function App() {
  const [mute, setMute] = useState(false);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/initiative">
            <Initiative />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

function Home() {
  const [mute, setMute] = useState(false);
  return (
    <div>
      <div>
        <video
          loop
          autoPlay
          muted={mute}
          style={{
            position: "absolute",
            height: "80%",
            width: "100%",
            objectFit: "cover",
            right: "0%",
            zIndex: "-1",
            opacity: "0.4",
          }}
        >
          <source src="Videos/quoteAudio.mp4" type="video/mp4"></source>
        </video>
      </div>
      <Row className="sectionOne quoteSection">
        <Quote />
        <Row style={{ minWidth: "20%", marginTop: "20%", bottom: "5%" }}>
          <Button
            variant="outline-secondary"
            href="#details"
            className="mx-auto"
          >
            Know More
          </Button>{" "}
          <Button
            onClick={() => {
              setMute(!mute);
            }}
            variant="outline-secondary"
            style={{
              float: "right",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            {!mute ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-volume-mute-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-volume-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
              </svg>
            )}
          </Button>
        </Row>
      </Row>
      <Row
        className="section"
        style={{ height: "auto", paddingBottom: "20vh" }}
      >
        <Fade up distance="20%" duration={1000}>
          <Gallery
            images={latestPhotos}
            enableLightbox={true}
            rowHeight={360}
            margin={4}
            enableImageSelection={false}
            // maxRows={3}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
          />
        </Fade>
      </Row>
      <Row className="section" id="details">
        <ImageSection
          imagesrc={data[0].image}
          heading={data[0].heading}
          content={data[0].content}
        />
      </Row>
    </div>
  );
}
// https://github.com/kyzylmonteiro/ninjaJ2W/blob/efd63cf81152518a1036320bbb375fde7e5620f5/src/CardSection.js#L90

function Initiative() {
  const [mute, setMute] = useState(false);
  return (
    <div>
      <div>
        <video
          loop
          autoPlay
          muted={mute}
          style={{
            position: "absolute",
            height: "80%",
            width: "100%",
            objectFit: "cover",
            right: "0%",
            zIndex: "0",
            opacity: "0.4",
          }}
        >
          <source src="Videos/im1.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="sectionOne">
        <ImageSection
          imagesrc={data[1].image}
          heading={data[1].heading}
          content={data[1].content}
        />
      </div>
    </div>
  );
}

function Media() {
  return (
    <div>
      <div>
        <Fade up distance="20%" duration={1000} delay={300}>
          <h2 className="sectionHeading">Media</h2>
        </Fade>
        <Fade up distance="5%" duration={1000} delay={300}>
          <Gallery
            images={photosMedia}
            enableLightbox={true}
            rowHeight={360}
            margin={4}
            enableImageSelection={false}
            // maxRows={3}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
          />
        </Fade>
      </div>
    </div>
  );
}

function Donate() {
  return (
    <div>
      <div className="sectionOne">
        <ImageSection
          imagesrc={data[2].image}
          heading={data[2].heading}
          content={data[2].content}
        />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <div className="sectionOne">
        <ImageSection
          imagesrc={data[4].image}
          heading={data[4].heading}
          content={data[4].content}
        />
      </div>
    </div>
  );
}

function Volunteer() {
  return (
    <div>
      <div className="sectionOne">
        <ImageSection
          imagesrc={data[3].image}
          heading={data[3].heading}
          content={data[3].content}
        />
      </div>
    </div>
  );
}

export default App;
