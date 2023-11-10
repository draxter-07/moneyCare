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
    const greenColorMoney = "rgb(0, 200, 150)";
    const redColorMoney = "rgb(240, 0, 0)";
    const blackColorMoney = "rgb(0, 0, 0)";

    const navigate = useNavigate()
    const [openConfig, setOpenConfig] = useState(false);
    const [blockBackChange, setBlockBackChange] = useState(false);
    const [transitionChange, setTransitionChange] = useState("0vh");
    const [openNewTrans, setOpenNewTrans] = useState(false);
    const [infoBas, setInfoBas] = useState([]);
    const [infoDet, setInfoDet] = useState([]);
    const [infoGraph, setInfoGraph] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/home")
            .then(resposta => {setInfoBas(resposta.data.infoBas); setInfoDet(resposta.data.infoDet); setInfoGraph(resposta.data.infoGraph)})
            .catch(response => alert(response.message));
        }, []
    );

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

    changeTrans();

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
                                    {infoGraph.map(data =>
                                    <>
                                        <circle cx={data.cx} cy={data.porcentage} r="0.5%">
                                            <title>{data.title}</title>
                                        </circle>
                                    </>
                                    )}
                                </g>
                                <text x="0.5%" y="96%">R$ 0</text>
                                <line x1="5%" x2="95%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="0.5%" y="73.5%">R$ ?</text>
                                <line x1="5%" x2="95%" y1="72.5%" y2="72.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="0.5%" y="51%">R$ ?</text>
                                <line x1="5%" x2="95%" y1="50%" y2="50%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="0.5%" y="28.5%">R$ ?</text>
                                <line x1="5%" x2="95%" y1="27.5%" y2="27.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="0.5%" y="6%">R$ 430</text>
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