'use strict';

const nodemailer = require('nodemailer');
const config = require('./config');
const nunjucks = require('nunjucks');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user,
    pass: config.pass
  } 
})

nunjucks.configure({ autoescape: true });
const payload = nunjucks.render('./templates/booking.html', {})
console.log(payload)

const mailOptions = {
  from: "Tom Claudio",
  to: 'tom@etours.ph',
  subject: 'Test Email',
  text: "This is a test email",
  html: payload
}

try {
  mailTransport.sendMail(mailOptions, ()=> {
    console.log("Success mail sending");
  });
} catch (error) {
  console.log('Error:', error )
}