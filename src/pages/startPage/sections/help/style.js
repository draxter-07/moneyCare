import styled from "styled-components"
import { colorSecundary, fontSizeMedium, fontSizeSmall, transitionSlow } from "../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 20px;

    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0);
    background: ${colorSecundary};

    transition: top ${transitionSlow} linear;

    position: fixed;
    z-index: 1;
    top: ${atr => atr.$display ? "0vh" : "-100vh"}
`
export const Title = styled.div`
    font-size: ${fontSizeMedium};
    color: rgb(255, 255, 255);
    margin: 0px 0px 20px 0px;
    font-weight: 700;
`
export const Info = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    font-size: ${fontSizeSmall};
    line-height: 1.2;
    div{
        margin: 0px 0px 10px 0px;
    }
`
export const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin: 20px 0px 0px 0px;
`