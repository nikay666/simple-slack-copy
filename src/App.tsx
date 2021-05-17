import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Chat } from './components/Chat/Chat';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import { Login } from './components/Login/Login';
import { AppBody, AppLoadigContent, AppLoading } from './App.style';
import Spinner from 'react-spinkit'


const App: React.FC = () => {
  const [user, loading] = useAuthState(auth)

  if(loading) {
    return (
        <AppLoading>  
            <AppLoadigContent>
              <img className="img" src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt="logo"/>
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
      <div className="App">
        <Router>
        {
          !user 
          ? <Login/>
          : <>
              <Header/>
              <AppBody>
                <Sidebar/>
                <Switch>
                  <Route path="/" exact>
                    <Chat/>
                  </Route>
                </Switch>
              </AppBody>
            </>
        }
      </Router>
    </div>
    )
}

export default App;
