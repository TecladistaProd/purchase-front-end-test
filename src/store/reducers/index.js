import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import buyReducer from "./buyReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  form: formReducer,
  buyInfo: buyReducer,
  products: productsReducer
});
