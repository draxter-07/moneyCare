import { SectionDiv, Info, NewTrans } from "./style";
import plusIMG from "../../../../imgs/plusIcon.png"

export default function InfoBas(atr){
    const greenColorMoney = "rgb(0, 200, 150)";
    const redColorMoney = "rgb(240, 0, 0)";

    function returnType(type){
        if(type == 0){
            return redColorMoney;
        }
        else{
            return greenColorMoney;
        }
    }

    return(
        <SectionDiv>
            {atr.infoBas.map(dado =>
                <Info color={returnType(dado.type)}><div>{dado.name}</div><div>{dado.value}</div></Info>
            )}
            <NewTrans onClick={() => atr.setOpenNewTrans(!atr.openNewTrans)}><img src={plusIMG}></img></NewTrans>
        </SectionDiv>
    )
}