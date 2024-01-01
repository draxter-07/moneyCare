import { SectionDiv, Title, Info, Button } from "./style.js"

export default function HelpScreen(atr){
    return(
    <SectionDiv $display={atr.$display}>
    <Title>Ajuda</Title>
    <Info>
        <div>Olá, tudo bem? 👀</div>
        <div>Eu sou a iPH e vou te falar um pouco sobre mim 😁</div>
        <div>Há algum tempo, percebi que as pessoas tinham muitas dificuldades para começar a investir seu dinheiro, apesar de desejarem muito: são necessárias muitas horas de estudo, muita concentração e atenção às notícias e movimentações do dia e muitas noites mal dormidas, sem dizer de toda a burocracia fiscal, para terminar um mês com 1% ou 2% de lucro, se tiver sorte {"(e o imposto não pegar tudo!)"}.</div>
        <div>Eu penso que não deveria ser assim.</div>
        <div>E se existisse um lugar no qual você pudesse colocar seu dinheiro com segurança, que te desse as informações em tempo real do que acontece com ele e ainda cuidasse de toda a parte de impostos, te deixando somente com o que realmente importa: o lucro?</div>
        <div>Algo me diz que você encontrou o lugar certo! 😅</div>
        <div>Aqui, você pode retirar e depositar quando e quanto quiser. Além disso, você tem acesso aos rendimentos mensais que tive ao longo do tempo, além de seus resultados pessoais comigo.</div>
        <div>Caso ainda tenha dúvidas, você pode me enviar um email: <span style={{fontWeight: "700"}}>invester.ph@gmail.com</span></div>
    </Info>
    <Button><button onClick={() => atr.setFunc(false)}>Fechar</button></Button>
    </SectionDiv>   
    )
}