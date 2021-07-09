import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/about" exact>
            <Navbar />
            <About />
          </Route>
          <Route path="/contact" exact>
            <Navbar />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
