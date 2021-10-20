function arrayDepth(array){
    if (!Array.isArray(array)) return `You must insert an array`;

    let allDepth = 1,
        thisDepth;

    for (const value of array) {
        thisDepth = 1;

        if (Array.isArray(value)){
            thisDepth += arrayDepth(value);
        }
        
        if(thisDepth > allDepth){
            allDepth = thisDepth;
        }
    }

    return allDepth;
}

let thisArray = [10, [25, 13], [14, [55, [66, [17]]]], 2];

console.log(arrayDepth(thisArray))