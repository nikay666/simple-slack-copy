import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'


const HeaderContainer = styled.div`
    display: flex;

`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
`

const HeaderAvatar = styled(Avatar)`

`

const HeaderCenter = styled.div`

`

const HeaderRight = styled.div`

`

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>

               <HeaderAvatar
                //TODO: add onclick
               />

            </HeaderLeft>

            <HeaderCenter>

            </HeaderCenter>

            <HeaderRight>

            </HeaderRight>
        </HeaderContainer>
    )
}
