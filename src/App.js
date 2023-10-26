// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginSignup from "./pages/LoginSignup";
import SingleBlog from "./components/SingleBlog";
import Dashboard from "./pages/Dashboard";
import AddNew from "./components/Dashboard/AddNew";
import Chart from "./components/Dashboard/Chart";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/login" component={LoginSignup} /> */}
          <Route path="/Blog/:_id" component={SingleBlog} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add new blog" component={AddNew} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
