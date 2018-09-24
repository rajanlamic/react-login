import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';


const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : "";
 export const store = createStore(
    ,
    /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunk, promiseMiddleware())
      // other store enhancers if any
    )
  );
  
export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);
