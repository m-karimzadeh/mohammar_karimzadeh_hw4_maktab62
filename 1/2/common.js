let myString = prompt("Please Enter a String");

function equalReverse(string){
    stringLenght = string.length - 1;

    for(let i=0; i<=stringLenght; i++){
        if(myString[i] !== myString[stringLenght - i]){
            return false;
        }
    }

    return true;
}

console.log(equalReverse(myString))