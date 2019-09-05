'use strict';

const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');
const nodemailer = require('nodemailer');
const postmarkTransport = require('nodemailer-postmark-transport');

// Postmark config
const transport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: process.env.MAIL_USER
  }
}));
// Mailtrap config
// const transport = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS
//     ,
//   }
// });

const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
  return html;
}

exports.send = async (options) => {
  const html = generateHTML(options.filename, options);
  const mailOptions = {
    from: `Anthropawlogy Veterinary Care <booking@anthropawlogy.com>`,
    to: options.to,
    subject: options.subject,
    html,
    text: 'unsupported format, please contact booking@anthropawlogy.com to book.'
  };
  const sendMail = promisify(transport.sendMail, transport);

  return sendMail(mailOptions);
}