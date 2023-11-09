import styled from "styled-components"
import { colorDarkGreen, colorSoftGreen, colorDarkBlue, fontSizeMedium, fontSizeLarge, fontSizeMediumLarge, fastTransition, mediumTransition, backChangeTime } from "../../visualValues"

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
        
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

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
export const AcessContainer = styled.div`
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

        padding: 5px 10px;
        border-radius: 5px;
        border: none;

        font-size: ${fontSizeMedium};
        font-weight: bold;

        margin: 30px 0px 0px 0px;

        background: ${colorDarkBlue};
        color: rgb(255, 255, 255);

        transition: background ${fastTransition};

        :hover{
            background: ${colorDarkGreen};
            color: rgb(255, 255, 255);
        }
    }

    div{
        margin: 20px 0px 0px 0px;
    }

    @media (max-width: 1080px){
        width: 100%;
    }
`
export const Button = styled.button`
    margin: 20px 0px 0px 0px;
    padding: 5px 10px;
    border-radius: 5px;

    background: rgb(255, 255, 255);
    color: ${colorDarkGreen};

    font-weight: bold;

    transition: color ${fastTransition};

    :hover{
        color: ${colorDarkBlue};
    }
`
export const InputArea = styled.input`
    font-size: ${fontSizeMedium};
    display: ${atr => atr.$display ? "flex" : "none"};

    margin: 10px 0px 0px 0px;
    padding: 5px 10px;

    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 5px;

    width: 200px;

    transition: border ${fastTransition};

    :focus-visible, :hover{
        outline: none;
        border: 1px solid ${colorDarkGreen};
    }

    @media (max-width: 1080px){
        width: 100%;
    }
`