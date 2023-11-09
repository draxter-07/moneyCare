import styled from "styled-components"
import { fastTransition, fontSizeMedium, fontSizeMediumLarge, fontSizePlus, webkitStyle } from "../../../../visualValues"

export const InformacoesBasicas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;

    overflow: auto;
    ${webkitStyle}

    @media (max-width: 1080px){
        flex-wrap: wrap;
    }
`
export const InfoBas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: fit-content;
    height: fit-content;

    background: rgb(255, 255, 255);

    padding: 15px 18px;
    border-radius: 5px;

    margin: 30px 0px 0px 0px;

    div:nth-child(1){
        font-size: ${fontSizeMedium};
        margin: 0px 0px 10px 0px;
    }

    div:nth-child(2){
        font-size: ${fontSizeMediumLarge};
        color: ${atr => atr.color};
    }
`

export const NewTrans = styled.button`
    width: fit-content;
    height: 100%;

    background: rgb(255, 255, 255);

    padding: 15px 18px;
    border-radius: 5px;

    margin: 30px 0px 0px 0px;

    img{
        height: ${fontSizePlus};
        transition: transform ${fastTransition} linear;
    }

    :hover{
        img{
            transform: rotate(90deg);
        }
    }
`

export const NewTransDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    width: 100%;
    max-height: ${atr => atr.$display ? "100px" : "0px"};
    border-radius: 5px;
    margin: 30px 0px 0px;
    overflow: hidden;

    transition: max-height ${fastTransition} linear;

    div{
        box-sizing: border-box;

        width: 100%;
        padding: 20px;

        display: flex;
        flex-direction: row;
    }
`