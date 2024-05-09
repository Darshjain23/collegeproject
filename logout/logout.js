import { getUserToSessionIdMap,deleteSessionOfUser } from "../session.js"
import { logActivity } from "../log.js"
import cookieParser from 'cookie-parser'


async function logoutGet(req, res) {
    var user_id = await getUserToSessionIdMap(req.cookies.myWebsite)
    console.log(user_id)    
    logActivity("get", "logout", user_id?.rows[0].id)
      res.render('logout.ejs')
  }
  
async function logoutPost(req, res) {
    await deleteSessionOfUser(req.cookies.myWebsite)
    res.redirect('/login')
  }

export{logoutGet,logoutPost}