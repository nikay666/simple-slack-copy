import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'
import { LoginContainer, LoginInnerContaier } from './login.style'


export const Login: React.FC = () => {

    const singIn = (e: React.MouseEvent<HTMLButtonElement>): void =>  {
        e.preventDefault()
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }

    return (
        <LoginContainer>
            <LoginInnerContaier>
                <img  className="img" src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt="logo"/>
                <h1>Sing in to the  Slack</h1>
                <p>Hello</p>

                <Button 
                    type="submit" 
                    variant="contained"
                    onClick={singIn}
                >Sing in with Google</Button>

            </LoginInnerContaier>
        </LoginContainer>
    )
}

