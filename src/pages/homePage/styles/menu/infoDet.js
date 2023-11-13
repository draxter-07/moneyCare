import styled from "styled-components"
import { colorDarkGreen, fontSizeMedium, fontSizeMediumLarge, webkitStyle } from "../../../../visualValues"

export const InformacoesDetalhadas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: auto;
    height: 440px;
    margin: 30px 0px 0px 0px;

    @media (max-width: 1080px){
        flex-direction: column;
        height: 600px;
    }
`
export const InfoDet = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: rgb(255, 255, 255);

    padding: 20px;
    border-radius: 5px;

    margin: 0px 10px 0px 0px;

    width: 30%;
    height: auto;

    overflow: hidden;

    @media (max-width: 1080px){
        width: 100%;
        height: 70%;
        margin: 0px 0px 10px 0px;
    }
`
export const Dets = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
`
export const Titulo = styled.div`
    font-size: ${fontSizeMediumLarge};
    margin: 0px 0px 20px 0px;
`
export const Linhas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: auto;
    height: 100%;

    overflow: scroll;
    ${webkitStyle}
`
export const Total = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px 0px 0px 0px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    color: ${atr => atr.color};
    font-size: ${fontSizeMediumLarge}
`
export const Linha = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-top: 1px solid rgb(0, 0, 0);
    padding: 8px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: ${fontSizeMedium};

    div:nth-child(2){
        color: ${atr => atr.color};
        margin: 5px 0px 0px 0px;
    }
`