import React from 'react'
import { db } from '../../firebase'
import { SidebarOptionContainer } from './sidebar.style'

export const SidebarOption = ({Icon, title, addChannelOption}) => {

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    } 
    
    const selectChannel = () => {
    }
    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon &&  <Icon 
                fontSize='small'
                className='m10'
            />}
            { Icon ?  (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionContainer>
                    <span>#</span>{title}
                </SidebarOptionContainer>
            )}
        </SidebarOptionContainer>
    )
}

 
