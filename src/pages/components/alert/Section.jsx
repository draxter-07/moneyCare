import { ComponentDiv } from "./style.js"

export default function Alert(atr){
    return(
        <ComponentDiv $display={atr.display}>
            {atr.text}
        </ComponentDiv>
    )
}