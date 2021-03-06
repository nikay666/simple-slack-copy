import React from 'react'
import { SidebarContainer, SidebarHeader, SidebarInfo } from './sidebar.style'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import { SidebarOption } from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';



export const Sidebar = () => {
    const [channels] = useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth)
    
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Memi Nika</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentios & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Chanel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />

            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />

            <hr/>
            <SidebarOption addChannelOption Icon={AddIcon} title="Add channel" />

            {
                channels?.docs.map(doc => (
                    <SidebarOption  
                        key={doc.id} 
                        id={doc.id}
                        title={doc.data().name}
                    />
                ))
            }

        </SidebarContainer>
    )
}
