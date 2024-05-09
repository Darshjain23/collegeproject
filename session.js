var userToSessionMap = new Map()


// yeh function user ka details leta hai
function setUserToSessionIdMap(id,user_detail) {
    userToSessionMap.set(id,user_detail)
}

// yeh function user se id leta aur user detail deta hai
async function getUserToSessionIdMap(id) {
    var userDetails = await userToSessionMap.get(id)
    return(await userDetails)
}

function deleteSessionOfUser(id) {
    userToSessionMap.delete(id)
}

// function cookieExist(id){
//     var status = userToSessionMap.has(id)
//     return (status)
// }

export{setUserToSessionIdMap,getUserToSessionIdMap,deleteSessionOfUser,userToSessionMap}