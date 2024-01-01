import { SectionDiv, Info, NewTrans } from "./style";
import plusIMG from "../../imgs/plusIcon.png"

export default function InfoBas(atr){
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
            {infoBas.map(dado =>
                <Info color={returnType(dado.type)}><div>{dado.name}</div><div>{dado.value}</div></Info>
            )}
            <NewTrans onClick={() => setOpenNewTrans(!openNewTrans)}><img src={plusIMG}></img></NewTrans>
        </SectionDiv>
    )
}