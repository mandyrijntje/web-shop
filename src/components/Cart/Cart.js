import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "../../store/Products/actions";

class Cart extends Component {
  handleClickPlus = id => {
    console.log(this.props.products);
    this.props.dispatch(addProduct(id));
  };
  handleClickMinus = id => {
    console.log(this.props.products);
    this.props.dispatch(removeProduct(id));
  };
  //
  render() {
    console.log("products", this.props.cart);
    const cart = this.props.cart;
    const totalAmounts = cart.map(product => product.price * product.quantity);
    console.log("totalamounts:", totalAmounts);
    console.log("cart:", cart);
    const totalAmount = totalAmounts.reduce((acc, curr) => acc + curr, 0);
    const finalAmount = (Math.round(+totalAmount * 100) / 100).toFixed(2);

    if (!cart)
      return (
        <div>
          <h2>No products in cart</h2>
        </div>
      );
    return (
      <div className="mt-4 mb-4 pb-5 text-dark font-small">
        {cart.length > 0 ? (
          cart.map(product => {
            return (
              <div className="list-group mt-1 mb-1">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {product.name}
                  <span class="badge badge-info badge-pill">
                    €{"  "}
                    {product.price}
                  </span>

                  <span className="badge badge-white badge-pill">
                    <span
                      onClick={() => {
                        this.handleClickMinus(product.id);
                      }}
                      className="btn btn-info"
                    >
                      -
                    </span>
                    {"  "}
                    {product.quantity}
                    {"  "}
                    <span
                      onClick={() => {
                        this.handleClickPlus(product.id);
                      }}
                      className="btn btn-info"
                    >
                      +
                    </span>
                  </span>

                  <span className="badge badge-primary badge-pill">
                    €{"  "}
                    {(
                      Math.round(+(product.price * product.quantity) * 100) /
                      100
                    ).toFixed(2)}
                  </span>
                </li>
              </div>
            );
          })
        ) : (
          <div>
            Your basket is empty. Don't be sad. Click on the home icon on the
            top-left side of this page.
          </div>
        )}
        <li className="list-group-item d-flex justify-content-between align-items-center bg-info text-light">
          Total
          <span className="badge badge-primary badge-pill">
            €{"  "}
            {finalAmount}
          </span>
        </li>
        <Link to="/checkout" className="btn btn-danger mt-3">
          Let's go. I'm hungry.
        </Link>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState.products);
  return { cart: reduxState.products.cart };
}
export default connect(mapStateToProps)(Cart);
