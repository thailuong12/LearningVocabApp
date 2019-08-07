import "rxjs";
import React from "react";
import TopicsContainer from "./TopicsContainer/TopicsContainer";
import "semantic-ui-css/semantic.min.css";
import { Provider } from 'react-redux';
import "../StyleSheet/App.scss";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="mainApp">
        <div className="header">VOCABULARY</div>
        <TopicsContainer />
      </div>
    </Provider>
  );
}

export default App;
