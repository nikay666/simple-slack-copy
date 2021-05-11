import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { HeaderAvatar, HeaderContainer, HeaderLeft, HeaderRight, HeaderSearch } from './header.style';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export function Header() {
    const [user] = useAuthState(auth)

    console.log('user', user)

    return (
        <HeaderContainer>
            <HeaderLeft>

               <HeaderAvatar
                    onClick={() => auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
               />

               <ScheduleIcon/>
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon/>
                <input type="search" placeholder="Search" id="search"/>
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon/>
            </HeaderRight>
        </HeaderContainer>
    )
}
