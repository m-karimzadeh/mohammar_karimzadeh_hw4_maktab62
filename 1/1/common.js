function printColor(ordinal, colors) {
    if (!Array.isArray(ordinal)) return `You must insert an array as first input`;
    if (!Array.isArray(colors)) return `You must insert an array as second input`;

    let result = '',
        colorLength = colors.length;

    for (let i = 0; i < colorLength; i++) {
        if (i === 0) {
            result += `${i + 1}${ordinal[3]} choice is ${colors[i]}\n`;

        } else if (i === 1) {
            result += `${i + 1}${ordinal[2]} choice is ${colors[i]}\n`;

        } else if (i === 2) {
            result += `${i + 1}${ordinal[0]} choice is ${colors[i]}\n`;
            
        } else {
            result += `${i + 1}${ordinal[1]} choice is ${colors[i]}\n`;
        }
    }
    return result
}

thisOrdinal = ['rd', 'th', 'nd', 'st'];
thisColors = ['Blue', 'Green', 'Red', 'Black', 'Yellow', 'Orange', 'White', 'Purple', 'Violet', 'Indigo', 'Gray', 'Pink'];

console.log(printColor(thisOrdinal, thisColors))