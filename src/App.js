import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Images from "./components/Images.js";
import ImageSection from "./components/ImageSection.js";
import {Container, Row, Column} from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { photos } from "./components/photos";
import Feed from "react-instagram-authless-feed";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
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
  return <div>
  <Row className="sectionOne">
    <Images />
  </Row>
  <Row className="section">
    <ImageSection imagesrc="" heading="Our Vision" content="India is home to the largest number of visually impaired people in the world. Out of 45 million blind people across the globe, over 15 million are from India. Delhi has 19 schools and centers serving the blind. Our mission is to cover remote and deprived schools of India. The blind is living a mundane life based on donation and sympathy. It is our objective to provide empowerment and a sense of being so that they can cope in the world outside these premises."/>
  </Row>
  <Row className="section">
    <Row className="justify-content-md-center">
    <h2 className="sectionHeading">Our Latest Updates</h2>
    {/* <Feed userName="insidemearts" limit="4" className="Feed" classNameLoading="Loading" /> */}
    </Row>
  </Row>
</div>;
}
// https://github.com/kyzylmonteiro/ninjaJ2W/blob/efd63cf81152518a1036320bbb375fde7e5620f5/src/CardSection.js#L90

function Initiative() {
  return <div>
    <div className="sectionOne">
    <ImageSection imagesrc="" heading="Our Initiative" content="Our mission is to cover remote and deprived schools of India. The blind is living a mundane life based on donation and sympathy. It is our objective to provide empowerment and a sense of being so that they can cope in the world outside these premises.

Inside Me teaches drawing to empower these youth. Increased exposure to drawing will help the blind understand and represent space concept and symbolic relations. Visual art or drawing improves both academic achievement and performance on standardized tests.

Unfortunately, drawing as a subject for students with visual impairment has not been incorporated in India. But we hope to change that."/>
    </div>
  </div>;
}

function Media() {
  return <div>
    <div>
      <h2 className="sectionHeading" >Media</h2>
      <Gallery photos={photos} />
    </div>
  </div>;
}

function Donate() {
  return <div>
    <div className="sectionOne">
      <ImageSection imagesrc="" heading="Donate" content="In order to donate to our cause, please write to us at insidemearts@gmail.com"/>
    </div>
  </div>;
}

function Contact() {
  return <div>
    <div className="sectionOne">
      <h2 className="heading">Contact</h2>
    </div>
  </div>;
}

function Volunteer() {
  return <div>
    <div className="sectionOne">
      <ImageSection imagesrc="" heading="Volunteer with us" content="At Inside Me, we are always looking for enthusiastic and passionate people from all walks of life to give their time and energy to our budding talents. 

We currently teach drawing at IFB, Amar Colony, Lajpat Nagar and Janta Adarsh Andh Vidyalaya, Sadiq Nagar. 
Write to us at insidemearts@gmail.com to become a part of our initiative. "/>
    </div>
  </div>;
}