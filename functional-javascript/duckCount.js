function duckCount() {
    var temp = Array.prototype.slice.call(arguments);
    return temp.filter(function(item) {
        return Object.prototype.hasOwnProperty.call(item, 'quack');       
    }).length
}
//answer
function duckCount() {

    return  Array.prototype.slice.call(arguments).filter(function(item) {
        return Object.prototype.hasOwnProperty.call(item, 'quack');       
    }).length
}

module.exports = duckCount;