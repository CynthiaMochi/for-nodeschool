module.exports = function arrayMap(arr, fn) {
    var cache = [];
    return (function map(index, value) {

        cache.push(value);
        if (index > arr.length-2 ) return cache;//end condition
        return map(index+1 , fn(arr[index+1])) 
    })(0, fn(arr[0]));
}

//answer
module.exports = function arrayMap (arr, fn ,thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc;
    })
}
//thisArg是什么