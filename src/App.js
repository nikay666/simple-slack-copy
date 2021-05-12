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
import Spinner from 'react-spinkit'

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadigContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`



function App() {
  const [user, loading] = useAuthState(auth)


  if(loading) {
    return (
        <AppLoading>  
            <AppLoadigContent>
              <img  className="img" src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt="logo"/>
              <Spinner 
                name="ball-spin-fade-loader" 
                color="purple"
                fadeIn="none"
              />
            </AppLoadigContent>
        </AppLoading>
    )
  }
  
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
