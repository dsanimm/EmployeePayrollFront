import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employee from './components/payroll-form/payroll-form';

function App() {
  return (
    <div className="App">
        <>
      <Router>
        <Switch>
          <Route>
            <Employee />
          </Route>
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
