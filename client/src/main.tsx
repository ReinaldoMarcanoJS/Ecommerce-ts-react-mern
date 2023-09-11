import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { logger } from './middleware'
import rootReducer from './reducers/rootReducer.ts';
import thunk from "redux-thunk"
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import App from './App.tsx'
import './index.css'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const root = ReactDOM.createRoot(document.getElementById('root')!)

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);