import { SectionDiv } from "./style"
const Dat = new Date();

export default function NewTrans(atr){
    return(
    <SectionDiv $display={atr.openNewTrans}>
        <div>
            <input placeholder="Nome da transação"></input>
            {atr.infoDet.map(categories =>
                <button>{categories.category}</button>
            )}
            <button>Adicionar nova categoria</button>
            <button>Ganho</button>
            <button>Despesa</button>
            <input placeholder="Valor"></input>
            <input placeholder={Dat.getDate() + "/" + (Dat.getMonth() + 1) + "/" + Dat.getFullYear()}></input>
            <button>Enviar</button>
        </div>
    </SectionDiv>)
}