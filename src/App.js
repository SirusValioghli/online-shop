import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Products from "./components/pages/Products.js";
import Landing from "./components/pages/Landing.js";
import About from "./components/pages/About.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
