import { SectionDiv, Content, Logo, Button } from "./style"

export default function Topo(atr){
    return(
        <SectionDiv>
            <Logo>MoneyCare</Logo>
            <Content>
                <div>
                    <Button onClick={() => atr.setOpenConfig(!atr.openConfig)}>?</Button>
                </div>
                <div>
                    <Button onClick={() => atr.setOpenConfig(!atr.openConfig)}>Configurações</Button>
                </div>
                <Button onClick={atr.changeWindow}>Sair</Button>
            </Content>
        </SectionDiv>
    )
}