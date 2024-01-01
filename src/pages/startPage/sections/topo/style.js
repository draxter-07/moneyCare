import styled from "styled-components"
import { fontSizeMedium, colorMain, colorSecundary, transitionFast, fontSizeSmall } from "../../../../visualValues"


export const SectionDiv = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: fit-content;
    margin: 0px 50px 0px 0px;
        
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
    }
`
export const Logo = styled.div`
    padding: 0px 0px 0px 50px;
    font-size: ${fontSizeMedium};
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