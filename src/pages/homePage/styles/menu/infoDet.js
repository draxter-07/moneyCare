import styled from "styled-components"
import { fontSizeMedium, fontSizeMediumLarge, webkitStyle } from "../../../../visualValues"

export const InformacoesDetalhadas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: auto;
    height: 440px;
    margin: 30px 0px 0px 0px;
`
export const InfoDet = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: rgb(255, 255, 255);

    padding: 20px;
    border-radius: 5px;

    width: 350px;
    height: auto;
`
export const Dets = styled.div`
    display: flex;
    flex-direction: column;
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
    height: 300px;

    overflow: auto;
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
    flex-direction: row;
    justify-content: space-between;

    font-size: ${fontSizeMedium};

    div:nth-child(2){
        color: ${atr => atr.color};
    }
`