import { Background, Button } from "./style.js"

import HelpScreen from "./sections/help/Section.jsx"
import Topo from "./sections/topo/Section.jsx"
import AcessContainer from "./sections/acessContainer/Section.jsx"

import Alert from "../components/alert/Section.jsx"

import { useState } from "react"

import TransitionScreen from "../components/transitionScreen/Page.jsx"

export default function StartPage(){
    const [openSignUp, setOpenSignUp] = useState(false);
    const [transitionChange, setTransitionChange] = useState(false)
    const [showHelp, setShowHelp] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState("")

    return(
        <>
        <TransitionScreen $display={transitionChange}/>
        <HelpScreen $display={showHelp} setFunc={setShowHelp}/>
        
        <Background>
            <Topo setShowHelp={setShowHelp}/>

            <AcessContainer 
                openSignUp={openSignUp}
                setAlertText={setAlertText}
                setShowAlert={setShowAlert}
                setTransitionChange={setTransitionChange}
            />

            <Button onClick={() => setOpenSignUp(!openSignUp)}>{openSignUp ? "Entrar em uma conta" : "Criar uma conta"}</Button>
        </Background>

        <Alert display={showAlert} text={alertText} />
        </>
    )
}