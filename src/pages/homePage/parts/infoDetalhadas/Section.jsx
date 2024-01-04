import { Category, Content, SectionDiv, Titulo, Linhas, Linha, Total } from "./style";
import Grafico from "./grafico/Section.jsx";

export default function InfoDet(atr){
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
        <>
        {atr.infoDet.map(dado =>
            <SectionDiv>
                <Content>
                    <Category>
                        <Titulo>{dado.category}</Titulo>
                        <Linhas>
                        {dado.transactions.map(valor =>
                            <Linha color={returnType(valor.type)}>
                                <div>{valor.name}</div>
                                <div>{valor.value}</div>
                            </Linha>
                        )}
                        </Linhas>
                     </Category>
                    <Total color={returnType(dado.result.type)}>{dado.transactions.length == 0 ? "Sem transações ainda" : dado.result.value}</Total>
                </Content>

                <Grafico dado={dado}/>
            </SectionDiv>
        )}
        </>
    )
}