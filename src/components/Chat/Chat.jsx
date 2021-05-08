import React, { useEffect, useRef } from 'react'
import { ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatMessages, ChatBottom } from './chat.style'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { ChatInput } from './ChatInput';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import { Message } from '../Message/Message';



export const Chat = () => {
    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages, loading] = useCollection(
        roomId && 
        db
            .collection('rooms')
            .doc(roomId)
            .collection('message')
            .orderBy('timestamp', 'asc')
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
            <>
                <ChatHeader>
                    <ChatHeaderLeft>
                        <h4>
                            <strong>#{roomDetails?.data().name}</strong>
                            <StarBorderOutlinedIcon/>
                        </h4>
                    </ChatHeaderLeft>
                    <ChatHeaderRight>
                        <p><InfoOutlinedIcon/> Details</p>
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
                    <ChatBottom  ref={chatRef} />
                </ChatMessages>

                <ChatInput
                    chatRef={chatRef}
                    channelId={roomId}
                    channelName={roomDetails?.data().name}
                />
            </>
            )}
        </ChatContainer>
    )
}
