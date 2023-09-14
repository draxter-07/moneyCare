import { Background, Topo, LoginContainer, SignUpContainer, Logo } from "./style.js"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import TransitionScreen from "../transitionScreen/Page.jsx"

import { homeURL } from "../../variablesValues.js"

export default function StartPage(){
    const navigate = useNavigate()
    const [openSignUp, setOpenSignUp] = useState("none");
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
                <SignUpContainer display={openSignUp}>
                    <div>
                        <button onClick={() => setOpenSignUp("flex")}>Sign up</button>
                    </div>
                    <div>
                        <button onClick={() => setOpenSignUp("none")}>Voltar</button>
                        <input placeholder="Nome"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Senha"></input>
                        <input placeholder="Confirme sua senha"></input>
                        <div>
                            <button>Começar</button>
                        </div>
                    </div>
                </SignUpContainer>
            </Topo>

            <LoginContainer>
                Acesse sua conta
                <input placeholder="Email"></input>
                <input placeholder="Senha"></input>
                <button onClick={changeWindow}>Entrar</button>
            </LoginContainer>

        </Background>
        </>
    )
}