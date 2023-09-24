import styled from "styled-components"


export const ConfigDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;

    background: rgb(255, 255, 255);

    width: 100%;
    height: fit-content;
    max-height: ${atr => atr.$display ? "100px" : "0px"};
    padding: 20px;
    border-radius: 5px;

    overflow: hidden;

    transition: max-height 1s linear;
`