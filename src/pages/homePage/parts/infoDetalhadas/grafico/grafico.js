import styled from "styled-components"
import { transitionFast } from "../../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 100%;

    border-radius: 5px;

    svg{
        width: 100%;
        height: 100%;

        circle{
            title{
                font-size: 200px;
            }
            transition: r ${transitionFast};
        }
        text{
            font-size: 13px;
        }
     }

     @media (max-width: 1080px){
        height: 30%;
        svg{
            text{
                font-size: 7px;
            }
        }
     }
`