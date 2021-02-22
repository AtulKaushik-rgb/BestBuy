import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import Reducer from './store/reducer'
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";


const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, Reducer);
// const store = createStore(persistedReducer);



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
let store = createStore(
 persistedReducer,
 composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

const routing = (
    <BrowserRouter>
    <Provider store = {store}>
        <PersistGate persistor = {persistor}>
            <App/>
        </PersistGate>
    </Provider>
    </BrowserRouter>
)


var mountNode = document.getElementById("app");
ReactDOM.render(routing, mountNode);