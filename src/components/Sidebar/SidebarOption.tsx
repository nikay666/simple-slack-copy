import React from 'react'
import { db } from '../../firebase'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../../features/appSlice'
import { SidebarOptionChannel, SidebarOptionContainer } from './sidebar.style'
import { SidebarOptionProps } from './SidebarTypes'


export const SidebarOption = ({Icon, title, addChannelOption, id}: SidebarOptionProps) => {
    const dispatch = useDispatch()

    const addChannel = (): void => {
        const channelName = prompt('Please enter the channel name')

        channelName && db.collection('rooms').add({ name: channelName })
    } 
    
    const selectChannel = (): void => {
        id && dispatch(enterRoom({ roomId: id }))
    }

    const handleChannelAction = (): () => void => {
        return addChannelOption ? addChannel : selectChannel
    }


    return (
        <SidebarOptionContainer
            onClick={handleChannelAction}
        >
            {Icon &&  <Icon 
                fontSize='small'
                className='m10'
            />}
            { Icon ?  (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

 
