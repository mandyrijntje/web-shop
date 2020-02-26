const initialState = { list: [], cart: [], searchList: [] };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED": {
      return {
        ...state,
        list: action.payload
      };
    }
    case "ADD_PRODUCT": {
      const productId = action.payload;
      const inCart = state.cart.find(product => product.id === productId);

      if (!inCart) {
        const product = state.list.find(product => product.id === productId);
        //find it in the list
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }]
        };
      } else {
        const updatedCart = state.cart.map(product =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return {
          ...state,
          cart: updatedCart
        };
      }
    }
    case "REMOVE_PRODUCT": {
      const productId = action.payload;
      //
      const inCart = state.cart.find(product => product.id === productId);
      // First check if already in cart
      if (!inCart) {
        return state;
      } else {
        // Check qty
        if (inCart.quantity > 1) {
          // if bigger than 1, subtract
          const updatedCart = state.cart.map(
            product =>
              product.id === productId
                ? { ...product, quantity: product.quantity - 1 }
                : product
            //for each product in cart map if id===id then return either qty-1 or just the product whose id!==id
          );
          return {
            ...state,
            cart: updatedCart
          };
        } else {
          // if quantity !>1, delete them i.e. filter everything that doesn't have that id
          const updatedCart = state.cart.filter(
            product => product.id !== productId
          );
          return {
            ...state,
            cart: updatedCart
          };
        }
      }
    }
    case "SEARCH_PRODUCT": {
      const searchString = action.payload;
      const searchedProducts = state.list.filter(product =>
        product.name.toLowerCase().includes(searchString)
      );
      return {
        ...state,
        searchList: searchedProducts
      };
    }
    default: {
      return state;
    }
  }
}
