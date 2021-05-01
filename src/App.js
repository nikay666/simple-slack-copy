import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Switch>
            <Route path="/" exact>
              {/* Chat */}
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;
