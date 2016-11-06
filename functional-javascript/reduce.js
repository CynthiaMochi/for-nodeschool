//网友的答案
//自己没有想出来，一是slice以为不能用，还有就是没有想到要往发你里传参数，以为是个黑匣子
function reduce(arr, fn, initial) {
//如果没有初始值就从arr第一个值开始
//初始值是fn返回的
    if(!arr.length) return initial;//end condition
    return reduce(arr.slice(1), fn, fn(initial,arr[0]))
}

//answer
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value;//end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr))

    })(0, initial);
}
module.exports = reduce;