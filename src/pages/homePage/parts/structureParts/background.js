import styled from "styled-components"
import { colorMain, colorSoftMain, backChangeTime } from "../../../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorMain}}
        100% {background: ${colorSoftMain}}
    }

    width: 100%;
    height: 100%;
    padding: 20px 70px;

    background: ${colorMain};

    animation: changeBack ${atr => atr.blockBack ? "0s" : backChangeTime} infinite alternate linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`