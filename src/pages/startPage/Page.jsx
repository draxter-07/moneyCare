import { Background, Topo, AcessContainer, Logo, Button, InputArea } from "./style.js"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import TransitionScreen from "../transitionScreen/Page.jsx"

import { homeURL } from "../../variablesValues.js"

export default function StartPage(){
    const navigate = useNavigate()
    const [openSignUp, setOpenSignUp] = useState(true);
    const [transitionChange, setTransitionChange] = useState("-100vh")

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function changeWindow(){
        setTransitionChange("0px"); 
        await sleep(1000);
        navigate(homeURL);
    }

    return(
        <>
        <TransitionScreen top={transitionChange}/>
        <Background>

            <Topo>
                <Logo>MoneyCare</Logo>
            </Topo>

            <AcessContainer>
                    {openSignUp ? "Acesse sua conta" : "Crie sua conta"}
                    <div>
                        <InputArea placeholder="Nome" $display={!openSignUp}></InputArea>
                        <InputArea placeholder="Email" $display={true}></InputArea>
                        <InputArea placeholder="Senha" $display={true}></InputArea>
                        <InputArea placeholder="Confirme sua senha" $display={!openSignUp}></InputArea>
                    </div>
                    <button onClick={changeWindow}>{openSignUp ? "Acessar" : "Criar"}</button>
            </AcessContainer>

            <Button onClick={() => setOpenSignUp(!openSignUp)}>{openSignUp ? "Criar conta" : "Acessar conta"}</Button>
        </Background>
        </>
    )
}