import { SectionDiv, Logo, Button } from "./style.js"

export default function Topo(atr){
    return(
        <SectionDiv>
            <Logo>moneyCare</Logo>
            <Button onClick={() => atr.setShowHelp(true)}>Ajuda</Button>
        </SectionDiv>
    )
}