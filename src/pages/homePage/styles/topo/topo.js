import styled from "styled-components"
import { colorDarkGreen, colorDarkBlue, fontSizeMedium, fontSizeMediumLarge, fastTransition } from "../../../../visualValues"

export const Topo = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: fit-content;
        
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
    }
`
export const Topodiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button:nth-child(1){
        margin: 0px 20px 0px 0px;

        @media (max-width: 1080px){
            margin: 0px 0px 10px 0px;
        }
    }

    @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
    }
`
export const Logo = styled.div`
    font-size: ${fontSizeMediumLarge};
    font-weight: bold;
    color: ${colorDarkBlue};

    @media (max-width: 1080px){
        font-size: 45px;
        padding: 0px;
        margin: 0px 0px 20px 0px;
    }
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
        background: rgb(255, 255, 255);
    }
`