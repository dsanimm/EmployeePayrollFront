import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PayrollForm from './components/payroll-form/payroll-form';
import Home from "./components/home/home.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/payroll">
            <PayrollForm />
          </Route>
          <Route exact path="">
            <Redirect exact from="/" to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
