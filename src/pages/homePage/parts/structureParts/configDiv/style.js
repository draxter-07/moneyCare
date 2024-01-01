import styled from "styled-components"
import { transitionFast } from "../../../../../visualValues"


export const SectionDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    width: 100%;
    max-height: ${atr => atr.$display ? "100px" : "0px"};
    border-radius: 5px;
    margin: 30px 0px 0px;
    overflow: hidden;

    transition: max-height ${transitionFast} linear;

    div{
        box-sizing: border-box;

        width: 100%;
        padding: 20px;

        display: flex;
        flex-direction: row;
    }
`