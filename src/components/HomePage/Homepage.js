import React, { Component } from "react";
import { connect } from "react-redux";
import "./Homepage.css";
import Products from "../Products/Products";

class Homepage extends Component {
  render() {
    return (
      <div className="products">
        <div className="justify-content-center">
          <h1 className="display-1 mt-5">
            <s>vevf</s>
          </h1>
          <h6 className="display-5">
            <b>
              <i>veryexpensiveveryfresh</i>
            </b>
          </h6>
          <h6 className="display-6 mb-5">
            <i>
              you guessed it. very fresh food straight from mother nature's
              giving arms. with a conscious 7000% markup which we use to train
              our resident developers (they are not allowed to leave) to learn
              Redux and other easy frameworks. enjoy the goodness of money spent{" "}
              <s>well</s>.
            </i>
          </h6>
          <Products />
        </div>
      </div>
    );
  }
}

export default connect()(Homepage);
