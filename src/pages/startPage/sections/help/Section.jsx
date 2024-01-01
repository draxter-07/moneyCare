import { SectionDiv, Title, Info, Button } from "./style.js"

export default function HelpScreen(atr){
    return(
    <SectionDiv $display={atr.$display}>
    <Title>Ajuda</Title>
    <Info>
        <div>Olá, tudo bem? 👀</div>
        <div>Caso ainda tenha dúvidas, você pode me enviar um email: <span style={{fontWeight: "700"}}>philippe.idalgoprestes@gmail.com</span></div>
    </Info>
    <Button><button onClick={() => atr.setFunc(false)}>Fechar</button></Button>
    </SectionDiv>   
    )
}