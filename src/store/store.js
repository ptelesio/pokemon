import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './../reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunkMiddleware, loggerMiddleware];
} else {
  middleware = [...middleware, thunkMiddleware]
}

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);