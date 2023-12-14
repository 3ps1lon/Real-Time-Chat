const {trimStr} = require('./utils')


let users = []

const addUser = (user) => {
    const userName = trimStr(user.username)
    const userRoom = trimStr(user.room)

    const isExist = users.find(
    (u) => trimStr(u.username) === userName
    && trimStr(u.room) === userRoom)

    !isExist && users.push(user)

    const currentUser = isExist || user

    return { isExist: !!isExist, user: currentUser}
}

module.exports = { addUser }