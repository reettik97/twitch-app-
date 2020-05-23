import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        {/* <BrowserRouter> */}
        <Router history={history}>
          <div>
            <Header/>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
          </Router>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
