export function isEmail(email){
    let before = email;
    let after = email.replaceAll("@")
    if(before == after){
        return false
    }
    else{
        return true
    }
}

export function names(string){
    let str;
    string = string.toLowerCase().split(" ")
    for(let i = 0; i < string.length; i++){
        str = string[i][0].toUpperCase()
        for(let j = 1; j < string[i].length; j++){
            str += string[i][j]
        }
        string[i] = str
    }
    return(string.join(" "))
}

export function hasLetters(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p' , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(let i = 0; i < string.length; i++){
        for(let j  = 0; j < alphabet.length; j++){
            if(string[i] == alphabet[j]){
                return true;
            }
        }
    }
    return false
}