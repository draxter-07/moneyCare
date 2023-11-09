import { Background } from "./styles/background/background.js"
import { Topo, Logo, Topodiv, TopoButton } from "./styles/topo/topo.js"
import { Menu } from "./styles/menu/menu.js"
import { ConfigDiv } from "./styles/menu/config.js"
import { InformacoesBasicas, InfoBas, NewTrans, NewTransDiv } from "./styles/menu/infoBas.js"
import { InformacoesDetalhadas, InfoDet, Dets, Titulo, Linhas, Linha, Total } from "./styles/menu/infoDet.js"
import { Grafico } from "./styles/menu/grafico.js"
import plusIMG from "../../imgs/+.png"

import TransitionScreen from "../transitionScreen/Page.jsx"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function StartPage(){
    const greenColorMoney = "rgb(0, 200, 150)";
    const redColorMoney = "rgb(240, 0, 0)";
    const blackColorMoney = "rgb(0, 0, 0)";

    const navigate = useNavigate()
    const [openConfig, setOpenConfig] = useState(false);
    const [blockBackChange, setBlockBackChange] = useState(false);
    const [transitionChange, setTransitionChange] = useState("0vh");
    const [openNewTrans, setOpenNewTrans] = useState(false);

    const infoBas = [[greenColorMoney, "Saldo mensal", "R$ 50,00"], 
    [blackColorMoney, "Despesas mensais", "R$ 50,00"], 
    [blackColorMoney, "Ganhos mensais", "R$ 100,00"]]

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

    const infoDet = 
    [["Extrato Mensal", 
    [["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney]], 
    [greenColorMoney, "R$ 15,00"]],
    ["Extrato Mensal", 
    [["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney], 
    ["00/00/00 - Transação", "R$ 30,00", greenColorMoney], 
    ["00/00/00 - Transação", "R$ 15,00", redColorMoney]], 
    [greenColorMoney, "R$ 15,00"]]]

    return(
        <>
        <TransitionScreen top={transitionChange}/>
        <Background blockBack={blockBackChange}>
            <Topo>
                <Logo>MoneyCare</Logo>
                <Topodiv>
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
                                    <circle cx={"5%"} cy={"95%"} r="0.5%">
                                        <title>03/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={"12.5%"} cy={"95%"} r="0.5%">
                                        <title>04/2022 - R$ 0,00</title>
                                    </circle>
                                    <line x1="5%" x2="12.5%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"20%"} cy={"95%"} r="0.5%">
                                        <title>05/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="12.5%" x2="20%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"27.5%"} cy={"95%"} r="0.5%">
                                        <title>06/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="20%" x2="27.5%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"35%"} cy={"95%"} r="0.5%">
                                        <title>07/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="27.5%" x2="35%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"42.5%"} cy={"95%"} r="0.5%">
                                        <title>08/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="35%" x2="42.5%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"50%"} cy={"95%"} r="0.5%">
                                        <title>09/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="42.5%" x2="50%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"57.5%"} cy={"95%"} r="0.5%">
                                        <title>10/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="50%" x2="57.5%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"65%"} cy={"95%"} r="0.5%">
                                        <title>11/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="57.5%" x2="65%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"72.5%"} cy={"95%"} r="0.5%">
                                        <title>12/2022 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="65%" x2="72.5%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"80%"} cy={"95%"} r="0.5%">
                                        <title>01/2023 - R$ 0,00</title>
                                    </circle> 
                                    <line x1="72.5%" x2="80%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"87.5%"} cy={"50%"} r="0.5%">
                                        <title>02/2023 - R$ 230,00</title>
                                    </circle>
                                    <line x1="80%" x2="87.5%" y1="95%" y2="50%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
                                    <circle cx={"95%"} cy={"5%"} r="0.5%">
                                        <title>03/2023 - R$ 430,00</title>
                                    </circle>
                                    <line x1="87.5%" x2="95%" y1="50%" y2="5%" stroke-width="1" stroke="rgb(0, 0, 0)"></line>
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