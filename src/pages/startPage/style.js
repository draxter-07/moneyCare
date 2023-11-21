import styled from "styled-components"
import { colorDarkGreen, colorSoftGreen, colorDarkBlue, fontSizeMedium, fontSizeLarge, fontSizeMediumLarge, fastTransition, mediumTransition, backChangeTime, fastMediumTransition } from "../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorDarkGreen}}
        100% {background: ${colorSoftGreen}}
    }

    width: 100vw;
    height: 100vh;

    padding: 20px;

    background: ${colorDarkGreen};

    animation: changeBack ${backChangeTime} infinite alternate linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Topo = styled.div`
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
    font-size: ${fontSizeLarge};
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
export const AcessContainer = styled.div`
    @keyframes loading{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 15px 3px ${colorDarkBlue}}
    }   

    animation: ${atr => atr.$loading ? `loading ${mediumTransition} infinite alternate linear;` : "none"};

    box-sizing: border-box;
    height: fit-content;
    width: fit-content;

    margin: 80px 0px 0px 0px;
    padding: 30px 50px 30px 50px;
    border: none;
    border-radius: 10px;

    font-size: ${fontSizeMediumLarge};
    font-weight: bold;
    color: ${colorDarkBlue};

    background: rgb(255, 255, 255);

    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: fit-content;
        margin: 30px 0px 0px 0px;
    }

    div{
        margin: 20px 0px 0px 0px;
    }

    @media (max-width: 1080px){
        width: 100%;
    }
`
export const Button = styled.button`
    padding: 5px 10px;
    margin: 20px 0px 0px 0px;
    border-radius: 5px;

    background: rgb(255, 255, 255);
    color: ${colorDarkGreen};

    font-weight: bold;

    transition: color ${fastTransition};

    :hover{
        color: ${colorDarkBlue}; 
        background: rgb(255, 255, 255);   
    }
`
export const InputArea = styled.input`
    @keyframes wrongInput{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 5px 0px rgb(255, 0, 0)}
    }

    display: ${atr => atr.$display ? "flex" : "none"};
    font-size: ${fontSizeMedium};
    width: 200px;
    margin: 10px 0px 0px 0px;

    animation: ${atr => atr.$wrong ? `wrongInput ${fastMediumTransition} 2 alternate linear;` : "none"};

    @media (max-width: 1080px){
        width: 100%;
    }
`