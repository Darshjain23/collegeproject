import express from 'express'
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer'


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))




app.get('/', function (req, res) {
    res.render('index.ejs')
  })

app.listen(4000, function (req, res) {
    console.log("Server started")
  }) 