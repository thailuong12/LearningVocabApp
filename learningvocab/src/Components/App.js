import "rxjs";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hashHistory } from "react-router";
import VocabsPanes from "./VocabsContainer/VocabPanes";
import WritingContainer from "./WritingContainer/WritingContainer";
import WritingContent from "./WritingContainer/WritingContent";
import "semantic-ui-css/semantic.min.css";
import "../StyleSheet/App.scss";
import Nav from "./common/Nav";

function App() {
  return (
    <div className="mainApp">
      <Router history={hashHistory}>
        <Nav />
        <Route exact path="/" component={VocabsPanes} />
        <Route exact path="/vocab" component={VocabsPanes} />
        <Route exact path="/writing" component={WritingContainer} />
        <Route exact path={`/writing/:writingId`} component={WritingContent} />
      </Router>
    </div>
  );
}

export default App;
