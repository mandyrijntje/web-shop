import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Homepage from "./components/HomePage/Homepage";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar";
import Checkout from "./components/Form/Checkout";
import Signup from "./components/Form/Signup";

function App() {
  return (
    <div className="mb-2 bg-warning text-dark">
      <NavBar className="position-fixed" />
      <div className="App container">
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
      <div className="page-footer font-small bg-info text-white pt-2 fixed-bottom">
        <div className="container-fluid text-center text-md-center">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Opening Hours</h5>
              <p>0800 - 1700 CET • Mondays to Fridays</p>
            </div>
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Get in touch</h5>
              <p>55 Hemellaan, Amsterdam • 06262-62626 • info@vevf.com</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center pb-1">
          © 2020 Copyright:
          <a className="text-white" href="https://vevf.com/sghsdkgshkdg">
            {" "}
            www.vevf.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
