import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';
import { Chat } from './components/Chat/Chat';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import { Login } from './components/Login/Login';

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`

function App() {
  const [user, loading] = useAuthState(auth)

  
  return (
    <div className="app">
      <Router>
        {!user 
          ? <Login/>
          : (<>
            <Header/>
            <AppBody>
              <Sidebar/>
              <Switch>
                <Route path="/" exact>
                  <Chat/>
                </Route>
              </Switch>
            </AppBody>
            </>)
        }
      </Router>
    </div>
  );
}

export default App;
