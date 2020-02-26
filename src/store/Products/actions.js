export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(response => response.json())
    .then(products => {
      dispatch(productsFetched(products));
    });
}

export function productsFetched(products) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: products //how you see the real data, arr of objs
  };
}

export function addProduct(id) {
  return {
    type: "ADD_PRODUCT",
    payload: id //how you see the real data, arr of objs
  };
}

export function removeProduct(id) {
  return {
    type: "REMOVE_PRODUCT",
    payload: id //how you see the real data, arr of objs
  };
}

export function searchKeyword(searchString) {
  return {
    type: "SEARCH_PRODUCT",
    payload: searchString
  };
}
