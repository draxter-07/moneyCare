import styled from "styled-components"
import { fontSizeMedium, colorSecundary, transitionFast, transitionMedium, transitionSlow, fontSizeSmall } from "../../../../visualValues"

export const SectionDiv = styled.div`
    @keyframes loading{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 15px 3px ${colorSecundary}}
    }   

    animation: ${atr => atr.$loading ? `loading ${transitionSlow} infinite alternate linear;` : "none"};

    box-sizing: border-box;
    height: fit-content;
    width: fit-content;

    margin: 80px 0px 0px 0px;
    padding: 30px 50px 30px 50px;
    border: none;
    border-radius: 10px;

    font-size: ${fontSizeMedium};
    font-weight: bold;
    color: ${colorSecundary};

    background: rgb(255, 255, 255);

    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: fit-content;
        margin: 30px 0px 0px 0px;
        opacity: ${atr => atr.$disabled ? "0" : "1"};
        transition: opacity ${transitionFast}, background ${transitionMedium};
    }

    div{
        margin: 20px 0px 0px 0px;
    }

    @media (max-width: 1080px){
        width: 100%;
    }
`
export const Input = styled.input`
    @keyframes wrongInput{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 5px 0px rgb(255, 0, 0)}
    }

    display: ${atr => atr.$display ? "flex" : "none"};
    font-size: ${fontSizeSmall};
    width: 200px;
    margin: 10px 0px 0px 0px;

    animation: ${atr => atr.$wrong ? `wrongInput ${transitionMedium} 2 alternate linear;` : "none"};

    @media (max-width: 1080px){
        width: 100%;
    }
`