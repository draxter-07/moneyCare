import { Background } from "./parts/structureParts/background.js"
import Topo from "./parts/topo/Section.jsx"
import ConfigDiv from "./parts/structureParts/configDiv/Section.jsx"
import InfoBas from "./parts/infoBasicas/Section.jsx"
import InfoDet from "./parts/infoDetalhadas/Section.jsx"
import NewTrans from "./parts/structureParts/newTransDiv/Section.jsx"

import { Menu } from "./parts/structureParts/menu/menu.js"

import TransitionScreen from "../components/transitionScreen/Page.jsx"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function StartPage(){
    const navigate = useNavigate()
    const [openConfig, setOpenConfig] = useState(false);
    const [blockBackChange, setBlockBackChange] = useState(false);
    const [transitionChange, setTransitionChange] = useState("0vh");
    const [openNewTrans, setOpenNewTrans] = useState(false);
    const [infoBas, setInfoBas] = useState([]);
    const [infoDet, setInfoDet] = useState([]);
    const [transitionText, setTransitionText] = useState("");

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    async function changeTrans(){
        await sleep(1000);
        setTransitionChange("-100vh");
    }

    async function changeWindow(){
        setTransitionText("Até mais! :)")
        setTransitionChange("0vh");
        await sleep(1000);
        navigate("/");
    }

    useEffect(() => {
        axios.get("http://localhost:5000/home")
            .then(resposta => {
                setTransitionText("Olá, " + resposta.data.userInfo.name + " :)");
                setInfoBas(resposta.data.infoBas); 
                setInfoDet(resposta.data.infoDet); 
                changeTrans()})
            .catch(response => setTransitionText("Desculpe! Não consegui me conectar à base de dados :("))
        }, []
    );

    return(
        <>
        <TransitionScreen top={transitionChange} text={transitionText}/>
        <Background blockBack={blockBackChange}>
            <Topo setOpenConfig={setOpenConfig} openConfig={openConfig} changeWindow={changeWindow}/>

            <Menu>
                <ConfigDiv openConfig={openConfig} setBlockBackChange={setBlockBackChange} blockBackChange={blockBackChange}/>
                
                <InfoBas infoBas={infoBas} setOpenNewTrans={setOpenNewTrans} openNewTrans={openNewTrans}/>

                <NewTrans openNewTrans={openNewTrans} infoDet={infoDet} />

                <InfoDet infoDet={infoDet}/>
            </Menu>
        </Background>
        </>
    )
}