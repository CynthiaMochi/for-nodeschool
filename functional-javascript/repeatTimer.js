//answer
//单线程
//阻止事件循环
//operation是循环1000000次,需要足够的时间执行完operation
//settimeout打断了原本同步事件的执行，有机会访问任务列表
//100ms后会加入一个tiomout的目标事件，需要加入主线程中
function repeat(operation, num) {
  

   if (num <= 0) return;
    operation()
     console.log(num);
   
    // if (num % 10 === 0) {
    //     //console.log('start')
    //     setTimeout(function() {
    //     console.log('time'+num)
    //         repeat(operation, --num)//加入任务列表，延迟100ms后再执行
    //       //console.log("cost" + (start - new Date))
    //     },10);
    //     //console.log('end')
    // }else {
    //    repeat(operation, --num);
        
        setTimeout(function() {
        console.log('time'+num)
            repeat(operation, --num)//加入任务列表，延迟100ms后再执行
          //console.log("cost" + (start - new Date))
        },1);
}

module.exports = repeat;