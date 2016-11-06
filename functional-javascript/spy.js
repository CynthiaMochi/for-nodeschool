//没有做出来
// function Spy(target, method) {
//     this.count = 0;
//     target[method] = function () {
//         this.count ++;
//        return target[method].apply(this, arguments);
        
//     }
// }
//answer
function Spy(target, method) {
    var result = {count: 0};

    var fn = target[method];

    target[method] = function() {//主要是重写
        result.count += 1;
        return fn.apply(this, arguments);//自己没有把想到传递引用
    }

    return result;//将result传递出去，传出去的是有count属性的对象
}

module.exports = Spy;