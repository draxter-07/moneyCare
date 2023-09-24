import { createGlobalStyle } from "styled-components"
import { webkitStyle } from "../visualValues.js"

const GeneralStyle = createGlobalStyle`
    body{
        *{
            font-family: 'Roboto', sans-serif;
        }
    }

    ${webkitStyle}
`

export default GeneralStyle