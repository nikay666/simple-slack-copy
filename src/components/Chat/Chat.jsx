import React from 'react'
import { ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatMessages } from './chat.style'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { ChatInput } from './ChatInput';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';


export const Chat = () => {
    const roomId = useSelector(selectRoomId)
    console.log(selectRoomId)
    console.log(roomId)
    
    return (
        <ChatContainer>
            <h1>Hello</h1>
            <ChatHeader>
                <ChatHeaderLeft>
                    <h4>
                        <strong>#Room-name</strong>
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
                {/* List out the messages  */}
            </ChatMessages>

            <ChatInput
                channelId={roomId}
            />


        </ChatContainer>
    )
}
