import styled from "styled-components"


export const ConfigDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    width: 100%;
    max-height: ${atr => atr.$display ? "100px" : "0px"};
    border-radius: 5px;
    margin: 30px 0px 0px;
    overflow: hidden;

    transition: max-height 1s linear;

    div{
        box-sizing: border-box;

        width: 100%;
        padding: 20px;

        display: flex;
        flex-direction: row;
    }
`