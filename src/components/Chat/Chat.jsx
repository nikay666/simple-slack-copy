import React from 'react'
import { ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatMessages } from './chat.style'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { ChatInput } from './ChatInput';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import { Message } from '../Message/Message';



export const Chat = () => {
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId && 
        db
            .collection('rooms')
            .doc(roomId)
            .collection('message')
            .orderBy('timestamp', 'asc')
    )

    console.log(roomDetails?.data())
    console.log(roomMessages)
    
    return (
        <ChatContainer>
            <h1>Hello</h1>
            <ChatHeader>
                <ChatHeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </ChatHeaderLeft>
                <ChatHeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </ChatHeaderRight>
            </ChatHeader>

            <ChatMessages>
                {roomMessages?.docs.map(doc => {
                        const { message, timestamp, user, userImage } = doc.data()
                    console.log(userImage)
                        return ( 
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        )
                })}
            </ChatMessages>

            <ChatInput
                channelId={roomId}
                channelName={roomDetails?.data().name}
            />


        </ChatContainer>
    )
}
