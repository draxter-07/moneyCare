import styled from "styled-components"
import { colorDarkGreen, colorDarkBlue, fontSizeMedium, fontSizeMediumLarge, fastTransition } from "../../../../visualValues"

export const Topo = styled.div`
    box-sizing: border-box;

    position: relative;

    width: 100%;
    height: fit-content;

    padding: 20px 70px;
        
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`
export const Topodiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    button:nth-child(1){
        margin: 0px 20px 0px 0px;
        position: relative;
    }
`
export const Logo = styled.div`
    font-size: ${fontSizeMediumLarge};
    font-weight: bold;
    color: ${colorDarkBlue};
`
export const TopoButton = styled.button`
    width: fit-content;
    height: fit-content;

    padding: 5px 10px;
    border-radius: 5px;
    border: none;

    font-size: ${fontSizeMedium};
    font-weight: bold;

    color: ${colorDarkGreen};
    background: rgb(255, 255, 255);

    transition: color ${fastTransition};

    :hover{
        color: ${colorDarkBlue};
    }
`
export const ConfigDiv = styled.div`
    display: ${atr => atr.display};
    flex-direction: column;
    z-index: 1;
    position: absolute;

    background: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 5px;
`