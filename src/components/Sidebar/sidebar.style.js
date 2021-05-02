import styled from "styled-components";

export const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`

export const SidebarHeader = styled.div`
    display: flex;
    
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 4px;
        color: #49274b;
        font-size: 26px;
        background-color: white;
        border-radius: 50%;
    }
`

export const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;

        > .MuiSvgIcon-root {
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: #2be42b; 

        }
    }
  
`

export const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;

        > span {
            padding: 15px;
        }
    }
`

 