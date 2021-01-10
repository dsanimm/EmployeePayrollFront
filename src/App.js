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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/payroll-form">
            <PayrollForm />
          </Route>
          <Route exact path="/payroll-form/:id">
            <PayrollForm />
          </Route>
          <Route exact path="">
            <Redirect exact from="/" to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
