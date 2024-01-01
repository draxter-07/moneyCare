import styled from "styled-components"
import { colorMain, colorSecundary, fontSizeMedium, transitionSlow } from "../../../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    background: ${colorMain};

    box-shadow 0px 0px 10px 1px ${colorSecundary};

    width: 100vw;
    height: 100vh;
    
    position: fixed;
    top: ${atr => atr.$display ? "0vh" : "-100vh"};

    transition: top ${transitionSlow} linear; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        font-size: ${fontSizeMedium};
        margin: 50px 0px 0px 0px;
        color: ${colorSecundary};
    }
`