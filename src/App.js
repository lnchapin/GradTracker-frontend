import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Upload from './components/Upload';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/upload" component={Upload} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
