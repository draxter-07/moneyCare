import { Background, Topo, TopoButton, AcessContainer, Logo, Button, InputArea, Alert } from "./style.js"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

import TransitionScreen from "../transitionScreen/Page.jsx"

import { homeURL } from "../../variablesValues.js"

export default function StartPage(){
    const navigate = useNavigate()
    const [openSignUp, setOpenSignUp] = useState(false);
    const [transitionChange, setTransitionChange] = useState("-100vh")
    const [wrongName, setWrongName] = useState(false)
    const [wrongEmail, setWrongEmail] = useState(false)
    const [wrongPass, setWrongPass] = useState(false)
    const [wrongConfPass, setWrongConfPass] = useState(false)
    const [loadingAnimation, setLoadingAnimation] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState("")
    const [buttonDis, setButtonDis] = useState(false)

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function changeWindow(){
        setTransitionChange("0vh"); 
        await sleep(1000);
        navigate(homeURL);
    }

    async function logIn(e){
        let userEmail = e.target.parentElement.children[0].children[1].value
        let userPassword = e.target.parentElement.children[0].children[2].value
        if(userEmail.length == 0){
            setButtonDis(true)
            setWrongEmail(!wrongEmail);
            setAlertText("Não se esqueça de colocar seu email ;)")
            setShowAlert(true)
            await sleep(1000)
            setWrongEmail(false)
            setLoadingAnimation(false)
            await sleep(4000)
            setShowAlert(false)
            setButtonDis(false)
        }
        if(userPassword.length == 0){
            setButtonDis(true)
            setWrongPass(!wrongPass);
            setAlertText("Não se esqueça de colocar sua senha ;)")
            setShowAlert(true)
            await sleep(1000)
            setWrongPass(false)
            setLoadingAnimation(false)
            await sleep(4000)
            setShowAlert(false)
            setButtonDis(false)
        }
        if(userEmail.length != 0 && userPassword.length != 0){
            setLoadingAnimation(!loadingAnimation);
            let logObj = {email: userEmail, password: userPassword};
            await axios.post("http://localhost:5000" + "/login", logObj)
                .then(resposta => {console.log(resposta.data); changeWindow()})
                .catch(async response => {
                    if(response.response.status == 402){
                        setButtonDis(true)
                        setWrongEmail(!wrongEmail)
                        setAlertText("Não encontrei seu email :(")
                        setShowAlert(true)
                        await sleep(1000)
                        setWrongEmail(false)
                        setLoadingAnimation(false)
                        await sleep(4000)
                        setShowAlert(false)
                        setButtonDis(false)
                    }
                    else if(response.response.status == 401){
                        setWrongPass(!wrongPass)
                        await sleep(1000)
                        setWrongPass(false)
                        setLoadingAnimation(false)
                    }else{changeWindow()};
                })
        }
        
    }

    async function signUp(e){
        let userName = e.target.parentElement.children[0].children[0].value
        let userEmail = e.target.parentElement.children[0].children[1].value
        let userPassword = e.target.parentElement.children[0].children[2].value
        let userConfPassword = e.target.parentElement.children[0].children[3].value
        if(userName.length == 0){
            setWrongName(!wrongName);
            await sleep(1000)
            setWrongName(false)
        }
        if(userEmail.length == 0){
            setWrongEmail(!wrongEmail);
            await sleep(1000)
            setWrongEmail(false)
        }
        if(userPassword.length == 0){
            setWrongPass(!wrongPass);
            await sleep(1000)
            setWrongPass(false)
        }
        if(userConfPassword.length == 0){
            setWrongConfPass(!wrongConfPass);
            await sleep(1000)
            setWrongConfPass(false)
        }
        if(userPassword != userConfPassword){
            setWrongConfPass(!wrongConfPass);
            await sleep(1000)
            setWrongConfPass(false)
        }
        else{
            setLoadingAnimation(!loadingAnimation)
        }
    }

    return(
        <>
        <TransitionScreen top={transitionChange}/>
        <Background>

            <Topo>
                <Logo>MoneyCare</Logo>
                <div>
                    <TopoButton onClick={() => console.log("oi")}>Ajuda</TopoButton>
                </div>
            </Topo>

            <AcessContainer $loading={loadingAnimation} disabled={buttonDis}>
                    {openSignUp ? "Crie uma conta" : "Entre na sua conta"}
                    <div>
                        <InputArea placeholder="Nome" $display={openSignUp} $wrong={wrongName}></InputArea>
                        <InputArea placeholder="Email" $display={true} $wrong={wrongEmail}></InputArea>
                        <InputArea placeholder="Senha" $display={true} $wrong={wrongPass}></InputArea>
                        <InputArea placeholder="Confirme sua senha" $display={openSignUp} $wrong={wrongConfPass}></InputArea>
                    </div>
                    <button disabled={buttonDis} onClick={(e) => openSignUp ? signUp(e) : logIn(e)}>{openSignUp ? "Criar" : "Entrar"}</button>
            </AcessContainer>

            <Button onClick={() => setOpenSignUp(!openSignUp)}>{openSignUp ? "Entrar em uma conta" : "Criar uma conta"}</Button>
        </Background>

        <Alert $showUp={showAlert}>
            {alertText}
        </Alert>
        </>
    )
}