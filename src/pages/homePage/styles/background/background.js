import styled from "styled-components"
import { colorDarkGreen, colorSoftGreen, backChangeTime } from "../../../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorDarkGreen}}
        100% {background: ${colorSoftGreen}}
    }

    width: 100%;
    height: 100%;

    background: ${colorDarkGreen};

    animation-name: changeBack;
    animation-duration: ${atr => atr.blockBack ? "0s" : backChangeTime};
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`