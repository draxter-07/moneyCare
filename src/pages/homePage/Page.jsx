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

    const greenColorMoney = "rgb(0, 200, 150)";
    const redColorMoney = "rgb(240, 0, 0)";
    const blackColorMoney = "rgb(0, 0, 0)";

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

    function returnType(type){
        if(type == 0){
            return redColorMoney;
        }
        else{
            return greenColorMoney;
        }
    }

    useEffect(() => {
        axios.get("http://localhost:5000/home")
            .then(resposta => {
                setInfoBas(resposta.data.infoBas); 
                setInfoDet(resposta.data.infoDet); 
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
                        <InfoBas color={returnType(dado.type)}><div>{dado.name}</div><div>{dado.value}</div></InfoBas>
                    )}
                    <NewTrans onClick={() => setOpenNewTrans(!openNewTrans)}><img src={plusIMG}></img></NewTrans>
                </InformacoesBasicas>
                <NewTransDiv $display={openNewTrans}>
                    <div>
                        <button onClick={() => setBlockBackChange(!blockBackChange)}>nova transação</button>
                    </div>
                </NewTransDiv>

                {infoDet.map(dado =>
                    <InformacoesDetalhadas>
                        <InfoDet>
                            <Dets>
                                <Titulo>{dado.category}</Titulo>
                                <Linhas>
                                {dado.transactions.map(valor =>
                                    <Linha color={returnType(valor.type)}>
                                        <div>{valor.name}</div>
                                        <div>{valor.value}</div>
                                    </Linha>
                                )}
                                </Linhas>
                             </Dets>
                            <Total color={returnType(dado.result.type)}>{dado.result.value}</Total>
                        </InfoDet>

                        <Grafico>
                            <svg>
                                <g>     
                                    {dado.graph.body.map(data =>
                                    <>
                                        <circle cx={data.cx} cy={data.porcentage} r="0.5%">
                                            <title>{data.title}</title>
                                        </circle>
                                        {dado.graph.body.indexOf(data) > 0 ? <line x1={dado.graph.body[dado.graph.body.indexOf(data) - 1].cx} x2={data.cx} y1={dado.graph.body[dado.graph.body.indexOf(data) - 1].porcentage} y2={data.porcentage} stroke-width="1" stroke="rgb(0, 0, 0)"></line> : <></>}
                                    </>
                                    )}
                                </g>
                                {dado.graph.lateral.map(data =>
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