import styled from "styled-components"
import { colorMain, colorSecundary, fontSizeSmall, fontSizeLarge, transitionFast } from "../../../../visualValues"

export const SectionDiv = styled.div`
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
export const Content = styled.div`
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
    font-size: ${fontSizeLarge};
    font-weight: bold;
    color: ${colorSecundary};

    @media (max-width: 1080px){
        font-size: 45px;
        padding: 0px;
        margin: 0px 0px 20px 0px;
    }
`
export const Button = styled.button`
    width: fit-content;
    height: fit-content;

    padding: 5px 10px;
    border-radius: 5px;
    border: none;

    font-size: ${fontSizeSmall};
    font-weight: bold;

    color: ${colorMain};
    background: rgb(255, 255, 255);

    transition: color ${transitionFast};

    :hover{
        color: ${colorSecundary};
        background: rgb(255, 255, 255);
    }
`