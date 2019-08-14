import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import productReducer from "./reducers/product-reducer";
import userReducer from "./reducers/user-reducer";

const allReducer = combineReducers({
    products: productReducer,
    user: userReducer
});

const store = createStore(allReducer, window.devToolsExtension && window.devToolsExtension());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
