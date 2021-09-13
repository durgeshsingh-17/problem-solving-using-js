// function allLongestStrings(inputArray) {
//     let maxLen = inputArray.map(s => s.length).sort((a, b) => b - a)[0];
//     return inputArray.filter(s => s.length == maxLen);
// }

function allLongestStrings(inputArray) {
    let longestLength = 0;
    let longestWords = [];
    inputArray.forEach(word => {
        longestLength =
            longestLength < word.length ? word.length : longestLength;
    });

    inputArray.forEach(words => {
        if (longestLength === words.length) {
            longestWords.push(words);
        }
    });
    return longestWords;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
