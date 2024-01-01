import { SectionDiv, Input } from "./style.js"

import { inputError } from "../../../generalFunctions/windowsRelated.js"
import { sleep } from "../../../generalFunctions/numberRelated.js"
import { names, isEmail } from "../../../generalFunctions/stringRelated.js"
import { API, homeURL } from "../../../../variablesValues.js"

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AcessContainer(atr){
    const [loadingAnimation, setLoadingAnimation] = useState(false)
    const [wrongName, setWrongName] = useState(false)
    const [wrongEmail, setWrongEmail] = useState(false)
    const [wrongPix, setWrongPix] = useState(false)
    const [wrongPass, setWrongPass] = useState(false)
    const [wrongConfPass, setWrongConfPass] = useState(false)
    const [buttonDis, setButtonDis] = useState(false)

    const navigate = useNavigate()

    const setObj = {setButtonDis: setButtonDis, 
        setAlertText: atr.setAlertText, 
        setShowAlert: atr.setShowAlert, 
        setLoadingAnimation: setLoadingAnimation}

    async function changeWindow(){
        atr.setTransitionChange(true); 
        await sleep(1000);
        navigate(homeURL);
    }

    async function logIn(e){
        let userEmail = e.target.parentElement.children[0].children[1].value
        let userPassword = e.target.parentElement.children[0].children[3].value
        if(userEmail.length == 0 || userPassword.length == 0){
            await inputError([setWrongEmail, setWrongPass], "Ops, você esqueceu de completar todos os campos :)", setObj)
        }
        else if(!(isEmail(userEmail))){
            await inputError([setWrongEmail], "Ops, preencha o email corretamente :)", setObj)
        }
        else{
            setLoadingAnimation(true);
            setButtonDis(true)
            let logObj = {email: userEmail, password: userPassword};
            await axios.post(API + "/login", logObj)
                .then(resposta => {localStorage.setItem("investerUser", JSON.stringify(resposta.data)); changeWindow()})
                .catch(async response => {
                    if (response.code == "ERR_NETWORK"){
                        await inputError([], "Ops, não consegui me conectar ao servidor :(", setObj)
                    }
                    else if(response.response.status == 402){
                        await inputError([setWrongEmail], "Ops, não consegui encontrar seu email :(", setObj)
                    }
                    else if(response.response.status == 401){
                        await inputError([setWrongPass], "Ops, a senha está errada :(", setObj)
                    }
                })
        }
        
    }

    async function signUp(e){
        let userName = e.target.parentElement.children[0].children[0].value
        let userEmail = e.target.parentElement.children[0].children[1].value
        let userPix = e.target.parentElement.children[0].children[2].value
        let userPassword = e.target.parentElement.children[0].children[3].value
        let userConfPassword = e.target.parentElement.children[0].children[4].value
        if(userName.length == 0 || userEmail.length == 0 || userPix.length == 0 || userPassword.length == 0 || userConfPassword.length == 0){
            await inputError([setWrongName, setWrongEmail, setWrongPix, setWrongPass, setWrongConfPass], "Ops, você esqueceu de completar todos os campos :)", setObj)
        }
        else if(!(isEmail(userEmail))){
            await inputError([setWrongEmail], "Ops, preencha o email corretamente :)", setObj)
        }
        else if(userPassword != userConfPassword){
            await inputError([setWrongConfPass], "Ops, as senhas devem ser iguais :)", setObj)
        }
        else{
            setLoadingAnimation(true);
            setButtonDis(true)
            let logObj = {name: names(userName), email: userEmail.toLowerCase(), password: userPassword, pix: userPix};
            await axios.post(API + "/signup", logObj)
                .then(resposta => {localStorage.setItem("investerUser", JSON.stringify(resposta.data)); changeWindow()})
                .catch(async response => {
                    if (response.code == "ERR_NETWORK"){
                        await inputError([], "Ops, não consegui me conectar ao servidor :(", setObj)
                    }
                    else if(response.response.status == 409){
                        await inputError([setWrongEmail], "Ops, esse email já está vinculado a uma conta :(", setObj)
                    }
                })
        }
    }

    return(
        <SectionDiv $loading={loadingAnimation} $disabled={buttonDis}>
            {atr.openSignUp ? "Crie uma conta" : "Entre na sua conta"}
            <div>
                <Input placeholder="Nome" $display={atr.openSignUp} $wrong={wrongName}></Input>
                <Input placeholder="Email" $display={true} $wrong={wrongEmail}></Input>
                <Input placeholder="Chave Pix" $display={atr.openSignUp} $wrong={wrongPix}></Input>
                <Input type="password" placeholder="Senha" $display={true} $wrong={wrongPass}></Input>
                <Input type="password" placeholder="Confirme sua senha" $display={atr.openSignUp} $wrong={wrongConfPass}></Input>
            </div>
            <button onClick={atr.openSignUp ? (e) => signUp(e) : (e) => logIn(e)}>{atr.openSignUp ? "Criar" : "Entrar"}</button>
        </SectionDiv>
    )
}