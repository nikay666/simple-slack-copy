import React from 'react'
import { SidebarOptionContainer } from './sidebar.style'

export const SidebarOption = ({Icon, title, addChannelOption}) => {

    const addChannel = () => {
        
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
