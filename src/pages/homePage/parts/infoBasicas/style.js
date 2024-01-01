import styled from "styled-components"
import { transitionFast, transitionSlow, fontSizeSmall, fontSizeLarge, webkitStyle } from "../../../../visualValues"

export const SectionDiv = styled.div`
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
export const Info = styled.div`
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
        font-size: ${fontSizeSmall};
        margin: 0px 0px 10px 0px;
    }

    div:nth-child(2){
        font-size: ${fontSizeLarge};
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
        height: 15px;
        transition: transform ${transitionFast} linear;
    }

    :hover{
        img{
            transform: rotate(90deg);
        }
        background: rgb(255, 255, 255);
    }
`

export const NewTransDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);

    width: 100%;

    max-height: ${atr => atr.$display ? "500px" : "0px"};
    border-radius: 5px;
    margin: 30px 0px 0px;

    overflow: hidden;

    transition: max-height ${transitionSlow} linear;

    div{
        display: flex;
        flex-direction: column;
        padding: 20px;
        input{
            font-size: ${fontSizeSmall};
        }
        *{
            margin: 10px 0px 0px 0px;
        }
    }
`