import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>This is homepage</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
