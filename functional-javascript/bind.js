var slice = Array.prototype.slice;
//answer
//bind会返回一个方法，会带着namespace输出的方法
module.exports = function (namespace) {
    return console.log.bind(console, namespace);
}