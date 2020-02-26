import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, userLoggedIn } from "../../store/Products/loginactions";
//where am I using these?

class Checkout extends Component {
  state = {
    hidden: true,
    email: "",
    password: ""
  };
  //

  handleChange = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("I was changed");
  };

  //
  handleSubmit = () => {
    this.props.dispatch(login(this.state.email, this.state.password));
    //is this correct?
  };
  //
  toggleShow = event => {
    event.preventDefault();
    this.setState({ hidden: !this.state.hidden });

    console.log("I was clicked");
  };
  //
  componentDidMount() {
    if (this.state.password) {
      this.setState({ password: this.state.password });
      //but I've already done this in event (line 18)
      console.log("I was mounted");
    } //shouldnt here be this.props.dispatch(login(this.state.email, this.state.password));?
  }
  //NOR SURE WHAT CDM ABOVE IS DOING

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="eg. ionlyusethisemail@tologintowebshops.com"
            onChange={this.handleChange}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Surely you remember this.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <div className="input-group">
            <input
              type={this.state.hidden ? "password" : "text"}
              //TO CHECK IF HIDDEN IS TRUE
              className="form-control"
              id="exampleInputPassword1"
              placeholder="eg. ilikeexpen$ivegrocerie$ (or whatever your password is, we're not here to judge, only take your moneys)"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
            <button
              className="fa fa-eye input-group-addon"
              onClick={this.toggleShow}
            ></button>
          </div>
          <small id="passHelp" className="form-text text-muted">
            Surely you forgot this.
          </small>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label mb-3" htmlFor="exampleCheck1">
            <small>
              I agree to give you (at least one) kidney if, for whatever reason
              (and any other reason that I think is a good reason but is
              actually not a good reason), my payment does not go through.
            </small>
          </label>
        </div>
        <Link
          type="submit"
          to="/profile"
          onClick={this.handleSubmit}
          className="btn btn-primary"
        >
          I SAID I'M HONGERY!
        </Link>

        <div className="form-group mt-5 mb-0">
          <small>Don't have an account with us yet? W...why?</small>
        </div>
        <div className="form-group mt-0 mb-3 pb-3">
          <Link to="/signup" className="btn btn-danger">
            Sign me up, family.
          </Link>
        </div>
      </form>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log(???);
  // return { what am I returning? };
}
export default connect(mapStateToProps)(Checkout);
