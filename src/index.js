import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import categoryReducer from "./store/reducers/categoryReducer";
import contactusReducer from "./store/reducers/contactusReducer";
import loginReducer from "./store/reducers/loginReducer";
import signupReducer from "./store/reducers/createaccountReducer";
import productReducer from "./store/reducers/productReducer";
import cartReducer from "./store/reducers/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  contactusReducer: contactusReducer,
  loginReducer: loginReducer,
  signupReducer: signupReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
