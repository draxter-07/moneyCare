import { Background } from "./styles/background.js"
import { Logo } from "./styles/logo.js"

export default function TransitionScreen(atr){
    return(
        <Background $display={atr.$display}>
            <Logo>
                iPH
            </Logo>
            <span>
                {atr.text}
            </span>
        </Background>
    )
}