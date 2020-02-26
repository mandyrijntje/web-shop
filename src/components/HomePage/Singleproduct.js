import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default class Singleproduct extends Component {
  clickHandlerPlus = () => {
    this.props.handleClickPlus(this.props.id);
  };

  render() {
    return (
      <div className="col-3 mb-3">
        <div className="card">
          <img className="card-img-top" src={this.props.imageUrl} />
          <div className="card-body">
            <h3 className="card-title">{this.props.name}</h3>
            <p className="card-text">
              €{"  "}
              {this.props.price}
            </p>
            <p className="card-text">{this.props.description}</p>
            {this.props.inStock ? (
              <div>
                <p className="text-success instock-text font-italic">
                  in stock
                </p>
                <button
                  className="btn btn-info btn-block"
                  onClick={this.clickHandlerPlus}
                >
                  Add to Basket!
                </button>
              </div>
            ) : (
              <div>
                <p className="text-muted notinstock-text font-italic">
                  out of stock
                </p>
                <button className="btn btn-info btn-block disabled">
                  Maybe tomorrow.
                </button>
              </div>
            )}

            <Link
              to={`/products/${this.props.id}`}
              //how to make a single page for each product?
              className="btn-secondary btn-block btn-sm"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
