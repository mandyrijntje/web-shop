import { combineReducers } from "redux";
import productReducer from "./Products/reducer";
import loginreducer from "./Products/loginreducer";
//import developersReducer from "./developerReducer";
//import postReducer from "./post/reducer";
//

export default combineReducers({
  products: productReducer,
  login: loginreducer

  // we can add more "slice" subreducers here later on...
});
