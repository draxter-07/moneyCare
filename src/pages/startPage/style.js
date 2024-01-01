import styled from "styled-components"
import { backChangeTime, colorMain, colorSoftMain, colorSecundary, transitionFast } from "../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorMain}}
        100% {background: ${colorSoftMain}}
    }

    width: 100vw;
    height: 100vh;

    padding: 20px;

    background: ${colorMain};

    animation: changeBack ${backChangeTime} infinite alternate linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Button = styled.button`
    padding: 5px 10px;
    margin: 20px 0px 0px 0px;
    border-radius: 5px;

    background: rgb(255, 255, 255);
    color: ${colorMain};

    font-weight: bold;

    transition: color ${transitionFast};

    :hover{
        color: ${colorSecundary}; 
        background: rgb(255, 255, 255);   
    }
`