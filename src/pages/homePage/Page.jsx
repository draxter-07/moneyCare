import { Background } from "./parts/structureParts/background.js"
import Topo from "./parts/topo/Section.jsx"
import ConfigDiv from "./parts/structureParts/configDiv/Section.jsx"
import InfoBas from "./parts/infoBasicas/Section.jsx"

import { Menu } from "./parts/structureParts/menu/menu.js"
import { NewTransDiv } from "./parts/infoBasicas/style.js"
import { InformacoesDetalhadas, InfoDet, Dets, Titulo, Linhas, Linha, Total } from "./parts/infoDetalhadas/infoDet.js"
import { Grafico } from "./parts/infoDetalhadas/grafico/grafico.js"

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
    const Dat = new Date();

    const greenColorMoney = "rgb(0, 200, 150)";
    const redColorMoney = "rgb(240, 0, 0)";

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

    function changeMonth(e){
        let circle = e.target;
        for(let i = 0; i < e.target.parentElement.children.length; i++){
            if( e.target.parentElement.children[i].style.r == "0.7%"){
                e.target.parentElement.children[i].style.r = "0.5%";
            }
        }
        circle.style.r = "0.7%";
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

                <NewTransDiv $display={openNewTrans}>
                    <div>
                        <input placeholder="Nome da transação"></input>
                        {infoDet.map(categories =>
                            <button>{categories.category}</button>
                        )}
                        <button>Adicionar nova categoria</button>
                        <button>Ganho</button>
                        <button>Despesa</button>
                        <input placeholder="Valor"></input>
                        <input placeholder={Dat.getDate() + "/" + (Dat.getMonth() + 1) + "/" + Dat.getFullYear()}></input>
                        <button>Enviar</button>
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
                            <Total color={returnType(dado.result.type)}>{dado.transactions.length == 0 ? "Sem transações ainda" : dado.result.value}</Total>
                        </InfoDet>

                        <Grafico>
                            <svg>
                                <g>     
                                    {dado.graph.body.map(data =>
                                    <>
                                        <circle cx={data.cx} cy={data.porcentage} r="0.5%" onClick={(e) => changeMonth(e)}>
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