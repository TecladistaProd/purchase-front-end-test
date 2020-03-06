import { createStore, compose } from "redux";

import rootReducer from "./reducers";

const initialState = {};

let composeEnhancers;
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}
const store = createStore(rootReducer, initialState, composeEnhancers());

export default store;
