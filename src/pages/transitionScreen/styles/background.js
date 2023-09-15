import styled from "styled-components"
import { colorSoftGreen, colorDarkBlue, colorDarkGreen } from "../../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    background: ${colorDarkGreen};

    box-shadow: ${atr => atr.top == "0px" ? "none" : `0px 0px 5px 1px ${colorDarkBlue}`};

    width: 100%;
    height: 100%;

    z-index: 5;
    position: fixed;
    top: ${atr => atr.top};

    transition: top 30s linear; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ins{
        display: block;
        width: 250px;
    }
`