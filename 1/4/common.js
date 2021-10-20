function OneDimensionalArray(array){
    if (!Array.isArray(array)) return `You must insert an array`;

    let newArray = [];

    for (let i=0; i<array.length; i++) {
        if (Array.isArray(array[i])){
            for(let j=0; j<array[i].length; j++){
                if (Array.isArray(array[i][j])){
                    array.push(OneDimensionalArray(array[i][j]))

                }else{
                    array.push(array[i][j]);
                }
            }

        }else{
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let thisArray = [10, [25, 13], [14, [55, [66, [17]]]], 2];

console.log(OneDimensionalArray(thisArray))