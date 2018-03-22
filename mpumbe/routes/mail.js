const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
let transport;

nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'meilenpunkteundmehr@gmail.com', // generated ethereal user
            pass: 'Dir99241' // generated ethereal password
        }
    });
});
 


router.post("/kontakt", (req, res, next) => {

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"IronMailer 👻" <${req.body.email}>`, // sender address
        to: 'meilenpunkteundmehr@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
        //html: '<b>Hello world?</b>' // html body
    };

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.json({ yo: 'error' });
    } else {
        console.log('Message sent: ' + info.response);
        res.json({ yo: info.response });
    };
})
});

module.exports = router;