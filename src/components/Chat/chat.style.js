import styled from "styled-components";

export const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`

export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`
export const ChatHeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
        
        > .MuiSvgIcon-root {
            margin-left: 10px;
            font-size: 18px;
        }
    }
`

export const ChatHeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;

        > .MuiSvgIcon-root {
            margin-right: 5px;
            font-size: 16px;
        }
    }
`



export const ChatMessages = styled.div``

export const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;

        > input {
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid gray;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        }
        > button {
            display: none;
        }
    }
`

export const ChatBottom = styled.div`
    padding-bottom: 200px;
`