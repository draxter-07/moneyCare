import styled from "styled-components"
import { colorSoftGreen, colorDarkBlue, colorDarkGreen, fontSizeMediumLarge } from "../../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    background: ${colorDarkGreen};

    box-shadow: ${atr => atr.top == "0px" ? "none" : `0px 0px 5px 1px ${colorDarkBlue}`};

    width: 100vw;
    height: 100vh;

    z-index: 5;
    position: fixed;
    top: ${atr => atr.top};

    transition: top 1s linear; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ins{
        display: block;
        width: 250px;
    }
    span{
        font-size: ${fontSizeMediumLarge};
        margin: 50px 0px 0px 0px;
        color: ${colorDarkBlue};
    }
`