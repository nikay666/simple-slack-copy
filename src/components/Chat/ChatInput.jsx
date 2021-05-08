import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { db } from '../../firebase'
import { ChatInputContainer } from './chat.style'
import firebase from 'firebase'


export const ChatInput = ({channelName, channelId, chatRef}) => {
    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        console.log(channelId)

        if(!channelId){
            return false
        }
         
        db.collection('rooms').doc(channelId).collection('message').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Memi Nika',
            userImage: 'https://www.itl.cat/pngfile/big/64-647505_fate-kaleid-liner-prisma-illya-2wei-herz-fate.jpg'
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
