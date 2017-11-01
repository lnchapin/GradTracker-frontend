import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";

import Upload from './components/Upload';
import Login from './components/Login'

class App extends Component {
  render() {
    return <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/upload_csv" exact component={Upload} />
          </Switch>
        </HashRouter>
      </div>;
  }
}

export default App;
