import styled from "styled-components"
import { colorDarkGreen, colorSoftGreen, colorDarkBlue, fontSizeMedium, fontSizeLarge, fontSizeMediumLarge, fastTransition, mediumTransition, backChangeTime } from "../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorDarkGreen}}
        100% {background: ${colorSoftGreen}}
    }

    width: 100vw;
    height: 100vh;

    background: ${colorDarkGreen};

    animation-name: changeBack;
    animation-duration: ${backChangeTime};
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Topo = styled.div`
    box-sizing: border-box;

    position: relative;

    width: 100vw;
    height: fit-content;

    padding: 20px;
        
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
    }
`
export const Logo = styled.div`
    padding: 0px 0px 0px 50px;
    font-size: ${fontSizeLarge};
    font-weight: bold;
    color: ${colorDarkBlue};

    @media (max-width: 1080px){
        font-size: 45px;
        padding: 0px;
        margin: 0px 0px 20px 0px;
    }
`
export const LoginContainer = styled.div`
    @keyframes changeOpacity{
        0% {opacity: 0}
        100% {opacity: 1}
    }

    opacity: 1;

    animation-name: changeOpacity;
    animation-duration: ${backChangeTime};
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-timing-function: linear;

    box-sizing: border-box;
    height: fit-content;
    width: fit-content;

    margin: 80px 0px 0px 0px;
    padding: 30px 50px 30px 50px;
    border: none;
    border-radius: 10px;

    font-size: ${fontSizeMediumLarge};
    font-weight: bold;
    color: ${colorDarkBlue};

    background: rgb(255, 255, 255);

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        font-size: ${fontSizeMedium};

        margin: 10px 0px 0px 0px;
        padding: 5px 10px;

        border: 1px solid rgb(0, 0, 0, 0.2);
        border-radius: 5px;

        width: 200px;

        transition: border ${fastTransition};

        :focus-visible, :hover{
            outline: none;
            border: 1px solid ${colorDarkGreen};
        }

        @media (max-width: 1080px){
            width: 100%;
        }
    }

    input:nth-child(1){
        margin: 30px 0px 0px 0px;
    }

    button{
        width: fit-content;

        padding: 5px 10px;
        border-radius: 5px;
        border: none;

        font-size: ${fontSizeMedium};
        font-weight: bold;

        margin: 30px 0px 0px 0px;

        background: ${colorDarkBlue};
        color: rgb(255, 255, 255);

        transition: background ${fastTransition};

        :hover{
            background: ${colorDarkGreen};
            color: rgb(255, 255, 255);
        }
    }

    @media (max-width: 1080px){
        width: 100%;
    }
`
export const SignUpContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    background: rgb(255, 255, 255);
    border-radius: 5px;
    padding: none;
    margin: none;

    height: fit-content;
    width: fit-content;

    div:nth-child(1){
        button{
            width: fit-content;

            padding: 5px 10px;
            border-radius: 5px;
            border: none;

            font-size: ${fontSizeMedium};
            font-weight: bold;

            color: ${colorDarkGreen};
            background: rgb(255, 255, 255);

            transition: box-shadow ${fastTransition};

            :hover{
                box-shadow: 0px 0px 3px 2px ${colorDarkBlue};
            }
        }
    }

    div:nth-child(2){
        display: ${atr => atr.display};
        flex-direction: column;
        align-items: flex-end;

        background: rgb(255, 255, 255);
        border-radius: 5px;
        padding: 20px;

        position: absolute;
        z-index: 5;

        height:  fit-content;
        width: fit-content;

        button{
            border-radius: 5px;
            border: none;
            padding: none;

            background: rgb(255, 255, 255);
            color: ${colorDarkGreen};
            font-weight: bold;

            transition: color ${fastTransition};

            font-size: ${fontSizeMedium};

            :hover{
                color: ${colorDarkBlue};
            }
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;

            button{
                margin: 20px 0px 0px 0px;
                padding: 5px 10px;

                background: ${colorDarkGreen};
                color: rgb(255, 255, 255);

                transition: background ${fastTransition};

                :hover{
                    background: ${colorDarkBlue};
                    color: rgb(255, 255, 255);
                }
            }
        }

        input{
            font-size: ${fontSizeMedium};

            margin: 10px 0px 0px 0px;
            padding: 5px 10px;

            border: 1px solid rgb(0, 0, 0, 0.2);
            border-radius: 5px;

            width: 200px;

            transition: border ${fastTransition};

            :focus-visible, :hover{
                outline: none;
                border: 1px solid ${colorDarkGreen};
            }
        }
    }
`