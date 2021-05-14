import { Avatar } from '@material-ui/core'
import React from 'react'
import { MessageContainer, MessageInfo } from './message.style'
import { MessageProps } from './MessageTypes'


export const Message = ({ message, timestamp, user, userImage}: MessageProps) => {

    return (
        <MessageContainer>
            <Avatar src={userImage} variant="rounded" />

            <MessageInfo>
                <h4>
                    {user}
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}
