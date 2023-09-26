import { Background } from "./styles/background/background.js"
import { Topo, Logo, Topodiv, TopoButton } from "./styles/topo/topo.js"
import { Menu } from "./styles/menu/menu.js"
import { ConfigDiv } from "./styles/menu/config.js"
import { InformacoesBasicas, InfoBas } from "./styles/menu/infoBas.js"
import { InformacoesDetalhadas, InfoDet, Dets, Titulo, Linhas, Linha, Total } from "./styles/menu/infoDet.js"
import { Grafico } from "./styles/menu/grafico.js"

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
    const [transitionChange, setTransitionChange] = useState("0px");

    const infoBas = [[greenColorMoney, "Saldo mensal", "R$ 50,00"], 
    [blackColorMoney, "Despesas mensais", "R$ 50,00"], 
    [blackColorMoney, "Ganhos mensais", "R$ 100,00"]]

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function changeTrans(){
        await sleep(2000);
        setTransitionChange("-100vh");
    }

    async function changeWindow(){
        setTransitionChange("0px");
        await sleep(1500);
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
                </InformacoesBasicas>
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
                                    <path d={`M80 420 L${80 + 1*78.33} 420 L${80 + 2*78.33} 420 L${80 + 3*78.33} 420 L${80 + 4*78.33} 420 L${80 + 5*78.33} 420 L${80 + 6*78.33} 420 L${80 + 7*78.33} 420 L${80 + 8*78.33} 420 L${80 + 9*78.33} 420 L${80 + 10*78.33} 420 L${80 + 11*78.33} 200 L1020 20`} stroke="rgb(0, 0, 0)" fill="rgb(255, 255, 255)"/>
                                </g>
                                <g>       
                                    <circle cx={"2%"} cy={420} r="5">
                                        <title>03/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 1*78.33} cy={420} r="5">
                                        <title>04/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 2*78.33} cy={420} r="5">
                                        <title>05/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 3*78.33} cy={420} r="5">
                                        <title>06/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 4*78.33} cy={420} r="5">
                                        <title>07/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 5*78.33} cy={420} r="5">
                                        <title>08/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 6*78.33} cy={420} r="5">
                                        <title>09/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 7*78.33} cy={420} r="5">
                                        <title>10/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 8*78.33} cy={420} r="5">
                                        <title>11/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 9*78.33} cy={420} r="5">
                                        <title>12/2022 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 10*78.33} cy={420} r="5">
                                        <title>01/2023 - R$ 0,00</title>
                                    </circle> 
                                    <circle cx={80 + 11*78.33} cy={200} r="5">
                                        <title>02/2023 - R$ 230,00</title>
                                    </circle>
                                    <circle cx={80 + 12*78.33} cy={20} r="5">
                                        <title>03/2023 - R$ 430,00</title>
                                    </circle>
                                </g>
                                <text x="10" y="425" font-size="12px">R$ 0,00</text>
                                <line x1="80" x2="1020" y1="420" y2="420" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="10" y="325" font-size="12px">R$ ?,00</text>
                                <line x1="80" x2="1020" y1="320" y2="320" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="10" y="225" font-size="12px">R$ ?,00</text>
                                <line x1="80" x2="1020" y1="220" y2="220" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="10" y="125" font-size="12px">R$ ?,00</text>
                                <line x1="80" x2="1020" y1="120" y2="120" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>

                                <text x="10" y="25" font-size="12px">R$ 430,00</text>
                                <line x1="80" x2="1020" y1="20" y2="20" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
                            </svg>
                        </Grafico>
                </InformacoesDetalhadas>
                )}
            </Menu>
        </Background>
        </>
    )
}