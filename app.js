import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'



import { setUserToSessionIdMap, getUserToSessionIdMap, deleteSessionOfUser } from './session.js';
import { logActivity } from './log.js'
import { registerGet,registerPost } from './register/register.js'
import { loginGet,loginPost } from './login/login.js';
import { logoutGet,logoutPost } from './logout/logout.js';
import { cookieExist } from './middleware/checklogin.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + '\\public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())






app.get('/register', registerGet)

app.post('/register', registerPost)

app.get('/login', loginGet)

app.post('/login', loginPost)

app.get('/index', cookieExist , function(req,res){
  res.render('index.ejs')
})

app.get('/logout', cookieExist, logoutGet)

app.post('/logout', logoutPost)

app.listen(4000, function (req, res) {
  console.log("Server started")
}) 