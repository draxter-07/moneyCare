import { SectionDiv } from "../style";

export default function Grafico(atr){
    function changeMonth(e){
        let circle = e.target;
        for(let i = 0; i < e.target.parentElement.children.length; i++){
            if( e.target.parentElement.children[i].style.r == "0.7%"){
                e.target.parentElement.children[i].style.r = "0.5%";
            }
        }
        circle.style.r = "0.7%";
    }
    
    <SectionDiv>
        <svg>
        <g>     
        {atr.dado.graph.body.map(data =>
            <>
            <circle cx={data.cx} cy={data.porcentage} r="0.5%" onClick={(e) => changeMonth(e)}>
                <title>{data.title}</title>
            </circle>
            {atr.dado.graph.body.indexOf(data) > 0 ? 
                <line x1={atr.dado.graph.body[atr.dado.graph.body.indexOf(data) - 1].cx} x2={data.cx} 
                y1={atr.dado.graph.body[atr.dado.graph.body.indexOf(data) - 1].porcentage} y2={data.porcentage} 
                stroke-width="1" 
                stroke="rgb(0, 0, 0)"></line> : <></>}
            </>
        )}
        </g>
        {atr.dado.graph.lateral.map(data =>
            <text x="0.5%" y={data.y}>{data.value}</text>
        )}
        <line x1="5%" x2="95%" y1="95%" y2="95%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
        <line x1="5%" x2="95%" y1="72.5%" y2="72.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
        <line x1="5%" x2="95%" y1="50%" y2="50%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
        <line x1="5%" x2="95%" y1="27.5%" y2="27.5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
        <line x1="5%" x2="95%" y1="5%" y2="5%" stroke-width="1" stroke="rgb(0, 0, 0, 0.2)"></line>
        </svg>
    </SectionDiv>
}