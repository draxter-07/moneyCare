import { SectionDiv } from "./style.js";

export default function ConfigDiv(atr){
    return(
        <SectionDiv $display={atr.openConfig}>
            <div>
                <button onClick={() => atr.setBlockBackChange(!atr.blockBackChange)}>parar fundo</button>
            </div>
        </SectionDiv>
    )
}