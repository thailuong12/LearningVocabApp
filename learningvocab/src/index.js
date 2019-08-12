import "rxjs";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import store from "./Store";
import { Provider } from "react-redux";

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};


ReactDOM.render(<MainApp />, document.getElementById("root"));
