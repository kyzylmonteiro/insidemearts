import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header.js";
import Quote from "./components/Quote.js";
import ImageSection from "./components/ImageSection.js";
import Feed from "react-instagram-authless-feed";
import Gallery from "react-photo-gallery";
import { data } from "./data";
import { photos } from "./components/photos";
import { latestPhotos } from "./components/latestPhotos";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button'

function App() {
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
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Row className="sectionOne quoteSection">
        <Quote />
        <Button variant="outline-secondary" href="#details" className="mx-auto" style={{minWidth:"20%", marginTop:"20%", bottom:"5%"}}>Know More</Button>{' '}
      </Row>
      <Row className="section" id="details">
        <ImageSection
          imagesrc={data[0].image}
          heading={data[0].heading}
          content={data[0].content}
        />
      </Row>
      <Row className="section">
      <Fade up distance="20%" duration={1000}>
          <h2 className="sectionHeading">Our Latest Updates</h2>
          <Gallery photos={latestPhotos} />
      </Fade>
          {/* <ErrorBoundary>
              <Feed
                userName="insidemearts"
                className="Feed"
                classNameLoading="Loading"
                limit="4"
              />
            </ErrorBoundary> */}
      </Row>
    </div>
  );
}
// https://github.com/kyzylmonteiro/ninjaJ2W/blob/efd63cf81152518a1036320bbb375fde7e5620f5/src/CardSection.js#L90

function Initiative() {
  return (
    <div>
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
        <Gallery photos={photos} />
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