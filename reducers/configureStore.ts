import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '.';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { createWrapper } from 'next-redux-wrapper';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore);
export default wrapper;
