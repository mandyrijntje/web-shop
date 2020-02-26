import React from "react";
import { connect } from "react-redux";
import Singleproduct from "../HomePage/Singleproduct";
import { fetchProducts, addProduct } from "../../store/Products/actions";

class Products extends React.Component {
  //
  handleClickPlus = id => {
    console.log(this.props.products);
    this.props.dispatch(addProduct(id));
  };

  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    console.log("products", this.props.products);
    const products = this.props.products;
    const results = this.props.results;
    if (!products)
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    return (
      <div id="wraper" className="row mb-5 pb-5">
        {results.length > 0
          ? results.map((product, index) => {
              return (
                <Singleproduct
                  key={index}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  inStock={product.inStock}
                  id={product.id}
                  handleClickPlus={() => {
                    this.handleClickPlus(product.id);
                  }}
                />
              );
            })
          : products.map((product, index) => {
              return (
                <Singleproduct
                  key={index}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  inStock={product.inStock}
                  id={product.id}
                  handleClickPlus={() => {
                    this.handleClickPlus(product.id);
                  }}
                />
              );
            })}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState.products);
  return {
    products: reduxState.products.list,
    results: reduxState.products.searchList
  };
}
export default connect(mapStateToProps)(Products);
