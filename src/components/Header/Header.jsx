import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { HeaderAvatar, HeaderContainer, HeaderLeft, HeaderRight, HeaderSearch } from './header.style';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>

               <HeaderAvatar
                //TODO: add onclick
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
