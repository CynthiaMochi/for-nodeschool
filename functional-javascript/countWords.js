//mine
function countWords(inputWords) {
    return inputWords.reduce(function(prev, next) {

        if(prev[next]) prev[next]++;
        else prev[next] = 1;
        return prev;
    }, {})
}
//answer
function countWords(inputWords) {
    return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1;
        return countMap;
    }, {})
}
module.exports = countWords;