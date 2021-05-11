import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { auth, db } from '../../firebase'
import { ChatInputContainer } from './chat.style'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


export const ChatInput = ({channelName, channelId, chatRef}) => {
    const [input, setInput] = useState('')
    const [user] = useAuthState(auth)

    const sendMessage = (e) => {
        e.preventDefault()

        console.log(channelId)

        if(!channelId){
            return false
        }
         
        db.collection('rooms').doc(channelId).collection('message').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })

        chatRef.current.scrollIntoView({
            behavior: 'smooth'
        })

        setInput('')
    }

    return (
        <ChatInputContainer>
            <form>
                <input 
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder={`Message #${channelName}`}
                />
                <Button 
                    type='submit' 
                    onClick={sendMessage}
                    hidden 
                >Send</Button>
            </form>
        </ChatInputContainer>
    )
}
