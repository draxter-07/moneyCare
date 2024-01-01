import styled from "styled-components"
import { fontSizeSmall, transitionSlow } from "../../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);

    width: 100%;

    max-height: ${atr => atr.$display ? "500px" : "0px"};
    border-radius: 5px;
    margin: 30px 0px 0px;

    overflow: hidden;

    transition: max-height ${transitionSlow} linear;

    div{
        display: flex;
        flex-direction: column;
        padding: 20px;
        input{
            font-size: ${fontSizeSmall};
        }
        *{
            margin: 10px 0px 0px 0px;
        }
    }
`