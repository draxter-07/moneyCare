import { createGlobalStyle } from "styled-components"
import { webkitStyle, transitionFast, colorMain, fontSizeSmall, colorSecundary } from "../visualValues.js"

const GeneralStyle = createGlobalStyle`
    body{
        *{
            font-family: 'Roboto', sans-serif;
        }
    }

    input{
        padding: 5px 10px;

        border: 1px solid rgb(0, 0, 0, 0.2);
        border-radius: 5px;

        transition: border ${transitionFast};

        :focus-visible, :hover{
            outline: none;
            border: 1px solid ${colorMain};
        }
    }

    button{
        padding: 5px 10px;
        border-radius: 5px;
        border: none;

        font-size: ${fontSizeSmall};
        font-weight: bold;

        background: ${colorSecundary};
        color: rgb(255, 255, 255);

        transition: background ${transitionFast};

        :hover{
            background: ${colorMain};
            color: rgb(255, 255, 255);
        }
    }

    ${webkitStyle}
`

export default GeneralStyle