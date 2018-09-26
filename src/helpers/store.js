import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : "";
// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// );

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
