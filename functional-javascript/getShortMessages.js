function getShortMessages(messages) {
    var results =  messages.filter(function (message) {
       var len = message['message'].length;
        return  len <50;
    });
    return results.map(function(result){
        return result['message']
    })
}
//answer
// module.exports = function getShortMessages (messages) {
//     return messages.filter(function(item) {
//         return item.message.length <50
//     }).map(function(item) {
//         return item.message
//     })
// }
module.exports = getShortMessages;