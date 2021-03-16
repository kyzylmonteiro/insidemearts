import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Images from "./components/Images.js";
import Vision from "./components/Vision.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <div className="container">
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
  <div className="sectionOne">
    <Images />
  </div>
  <div className="section">
    <Vision />
  </div>
</div>;
}

function Initiative() {
  return <div>
    <div className="sectionOne">
      <h2 className="heading" >Initiative</h2>
    </div>
  </div>;
}

function Media() {
  return <div>
    <div className="sectionOne">
      <h2 className="heading" >Media</h2>
    </div>
  </div>;
}

function Donate() {
  return <div>
    <div className="sectionOne">
      <h2 className="heading">Donate</h2>
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