//map的使用
//我的解决
// function doubleAll(numbers) {
//     var results = [];
//     for (var i = 0; i < numbers.length; i++) {
//         results.push(numbers[i]*2)
//     }
//     return results;
// }
//答案
function doubleAll(numbers) {
    return numbers.map(function double(num) {
        return num * 2;
    })
}

module.exports = doubleAll;