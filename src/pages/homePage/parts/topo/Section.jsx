import { SectionDiv, Content, Logo, Buttons } from "./style"

export default function Topo(atr){
    return(
        <SectionDiv>
            <Logo>MoneyCare</Logo>
            <Content>
                <div>
                    <Buttons onClick={() => atr.setOpenConfig(!atr.openConfig)}>?</Buttons>
                </div>
                <div>
                    <Buttons onClick={() => atr.setOpenConfig(!atr.openConfig)}>Configurações</Buttons>
                </div>
                <Buttons onClick={atr.changeWindow}>Sair</Buttons>
            </Content>
        </SectionDiv>
    )
}