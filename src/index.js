import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import Reducer from '../store/reducer'
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';


// const rootReducer = combineReducers({
//     burgerBuilder:burgerBuilderReducer,
//     order:orderReducer
// })
const store = createStore(Reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

var mountNode = document.getElementById("app");
ReactDOM.render(app, mountNode);