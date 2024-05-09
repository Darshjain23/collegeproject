import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import { v4 as uuidv4 } from 'uuid';

import { checkEmail, setDB } from "../database.js";
import { logActivity } from '../log.js';
import { setUserToSessionIdMap } from '../session.js';





async function loginGet(req, res) {
  logActivity("get", "login")
  res.render('login.ejs', {
    'status': ''
  })
}

async function loginPost(req, res) {

  var client = setDB()
  var data = await checkEmail(req.body.email, client)
  client.end()
  if (data.rowCount > 0) {

    bcrypt.compare(req.body.password, data.rows[0].pass, async function (err, result) {
      if (result) {

        console.log("User login successfully")
        var sessionId = uuidv4();
        // it create session id for user
        var sessionIdMap = await setUserToSessionIdMap(sessionId, data)
        // stores session id and user detail on server in map
        res.cookie('myWebsite', sessionId, { maxAge: 10 * 10 * 1000 })
        //  it stores session id in client browser
        res.redirect('/logout')

      }
      else {
        console.log("Incorrect password")
        res.render('login.ejs', {
          'status': 'Incorrect password'
        })
      }
    });
  }
  else {
    console.log("No user")
    res.render('login.ejs', {
      'status': 'No user'
    })
  }
}

export { loginGet, loginPost }