import { sleep } from "./numberRelated.js"

export async function inputError(functionsArray, text, setFunctions){
    setFunctions.setButtonDis(true)
    for(let i = 0; i < functionsArray.length; i++){
        functionsArray[i](true)
    }
    setFunctions.setAlertText(text)
    setFunctions.setShowAlert(true)
    await sleep(1000)
    for(let i = 0; i < functionsArray.length; i++){
        functionsArray[i](false)
    }
    setFunctions.setLoadingAnimation(false)
    await sleep(4000)
    setFunctions.setShowAlert(false)
    setFunctions.setButtonDis(false) 
}