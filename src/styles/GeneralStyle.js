import { createGlobalStyle } from "styled-components"
import { webkitStyle, fastTransition, colorDarkGreen } from "../visualValues.js"

const GeneralStyle = createGlobalStyle`
    body{
        *{
            font-family: 'Roboto', sans-serif;
        }
    }

    input{
        margin: 10px 0px 0px 0px;
        padding: 5px 10px;

        border: 1px solid rgb(0, 0, 0, 0.2);
        border-radius: 5px;

        transition: border ${fastTransition};

        :focus-visible, :hover{
            outline: none;
            border: 1px solid ${colorDarkGreen};
        }

    ${webkitStyle}
`

export default GeneralStyle