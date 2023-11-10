import { Background } from "./styles/background/background.js"
import { Topo, Logo, Topodiv, TopoButton } from "./styles/topo/topo.js"
import { Menu } from "./styles/menu/menu.js"
import { ConfigDiv } from "./styles/menu/config.js"
import { InformacoesBasicas, InfoBas, NewTrans, NewTransDiv } from "./styles/menu/infoBas.js"
import { InformacoesDetalhadas, InfoDet, Dets, Titulo, Linhas, Linha, Total } from "./styles/menu/infoDet.js"
import { Grafico } from "./styles/menu/grafico.js"
import plusIMG from "../../imgs/plusIcon.png"

import TransitionScreen from "../transitionScreen/Page.jsx"

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
    const [infoGraph, setInfoGraph] = useState([]);

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function changeTrans(){
        await sleep(1000);
        setTransitionChange("-100vh");
    }

    async function changeWindow(){
        setTransitionChange("0vh");
        await sleep(1000);
        navigate("/");
    }

    useEffect(() => {
        axios.get("http://localhost:5000/home")
            .then(resposta => {
                setInfoBas(resposta.data.infoBas); 
                setInfoDet(resposta.data.infoDet); 
                setInfoGraph(resposta.data.infoGraph); 
                changeTrans()})
            .catch(response => alert(response.message));
        }, []
    );

    return(
        <>
        <TransitionScreen top={transitionChange}/>
        <Background blockBack={blockBackChange}>
            <Topo>
                <Logo>MoneyCare</Logo>
                <Topodiv>
                    <div>
                        <TopoButton onClick={() => setOpenConfig(!openConfig)}>?</TopoButton>
                    </div>
                    <div>
                        <TopoButton onClick={() => setOpenConfig(!openConfig)}>Configurações</TopoButton>
                    </div>
                    <TopoButton onClick={changeWindow}>Sair</TopoButton>
                </Topodiv>
            </Topo>

            <Menu>
                <ConfigDiv $display={openConfig}>
                    <div>
                        <button onClick={() => setBlockBackChange(!blockBackChange)}>parar fundo</button>
                    </div>
                </ConfigDiv>
                
                <InformacoesBasicas>
                    {infoBas.map(dado =>
                        <InfoBas color={dado[0]}><div>{dado[1]}</div><div>{dado[2]}</div></InfoBas>
                    )}
                    <NewTrans onClick={() => setOpenNewTrans(!openNewTrans)}><img src={plusIMG}></img></NewTrans>
                </InformacoesBasicas>
                <NewTransDiv $display={openNewTrans}>
                    <div>
                        <button onClick={() => setBlockBackChange(!blockBackChange)}>parar fundo</button>
                    </div>
                </NewTransDiv>

                {infoDet.map(dado =>
                    <InformacoesDetalhadas>
                        <InfoDet>
                            <Dets>
                                <Titulo>{dado[0]}</Titulo>
                                <Linhas>
                                {dado[1].map(valor =>
                                    <Linha color={valor[2]}>
                                        <div>{valor[0]}</div>
                                        <div>{valor[1]}</div>
                                    </Linha>
                                )}
                                </Linhas>
                             </Dets>
                            <Total color={dado[2][0]}>{dado[2][1]}</Total>
                        </InfoDet>

                        <Grafico>
                            <svg>
                                <g>     
                                    {infoGraph.body.map(data =>
                                    <>
                                        <circle cx={data.cx} cy={data.porcentage} r="0.5%">
                                            <title>{data.title}</title>
                                        </circle>
                                        {infoGraph.body.indexOf(data) > 0 ? <line x1={infoGraph.body[infoGraph.body.indexOf(data) - 1].cx} x2={data.cx} y1={infoGraph.body[infoGraph.body.indexOf(data) - 1].porcentage} y2={data.porcentage} stroke-width="1" stroke="rgb(0, 0, 0)"></line> : <></>}
                                    </>
                                    )}
                                </g>
                                {infoGraph.lateral.map(data =>
                                    <text x="0.5%" y={data.y}>{data.value}</text>
                                )}
                                <line x1="5%" x2="95%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                                <line x1="5%" x2="95%" y1="72.5%" y2="72.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                                <line x1="5%" x2="95%" y1="50%" y2="50%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                                <line x1="5%" x2="95%" y1="27.5%" y2="27.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                                <line x1="5%" x2="95%" y1="5%" y2="5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                            </svg>
                        </Grafico>
                    </InformacoesDetalhadas>
                )}
            </Menu>
        </Background>
        </>
    )
}