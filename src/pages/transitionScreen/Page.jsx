import { Background } from "./styles/background.js"
import { Logo } from "./styles/logo.js"
import Ad from "./Ad.jsx"

export default function TransitionScreen(atr){
    return(
        <Background top={atr.top}>
            <Logo>
                moneyCare
            </Logo>
        </Background>
    )
}