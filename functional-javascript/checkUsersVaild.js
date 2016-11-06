function checkUsersVaild(goodUsers) {
    return function allUsersVaild(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
           return goodUsers.some(function(goodUser) {
                return goodUser['id'] == submittedUser['id']
            })
        })
    }
}

module.exports = checkUsersVaild;