import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchKeyword } from "../../src/store/Products/actions";

class NavBar extends Component {
  state = {
    search: ""
  };

  handleSearch = () => {
    this.props.dispatch(searchKeyword(this.state.search));
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    console.log("this is cart in nav", this.props.cart);

    const mapQty = this.props.cart.map(product => product.quantity);
    const totalQty = mapQty.reduce((acc, currQty) => acc + currQty, 0);

    return (
      <div className="navbar bg-warning sticky-top">
        <div className="col text-center">
          <Link className="fa fa-home" to="/"></Link>
        </div>
        <div className="col ">
          <input
            className="input-sm"
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
            placeholder="search for a product"
          />
          <Link
            to="/results"
            className="fa fa-search"
            onClick={this.handleSearch}
            value="search"
          ></Link>
        </div>
        <div className="col text-center">
          <Link className="fa fa-shopping-basket" to="/cart">
            {"  "}
            {totalQty}
          </Link>
        </div>
        <div className="col text-center">
          <Link className="fa fa-user" to="/checkout"></Link>
        </div>
      </div>
    );
  }
}

//to display cart length we have to mstp
function mapStateToProps(reduxState) {
  console.log(reduxState);
  return { cart: reduxState.products.cart };
}

export default connect(mapStateToProps)(NavBar);
