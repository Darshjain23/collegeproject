import { userToSessionMap } from "../session.js"

function cookieExist(req,res,next){
    var id = req.cookies.myWebsite
    console.log(id)
    var status = userToSessionMap.has(id)
    if(status){
        next()
    }
    else{
        res.redirect('/login')
    }
}

export{cookieExist}