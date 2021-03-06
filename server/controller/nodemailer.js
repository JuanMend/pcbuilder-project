const nodemailer = require("nodemailer");


module.exports = {
  addContactForm: (req, res) => {
   
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDEREMAIL,
        pass: process.env.PASSWORD
      }
    });

    let mailOptions = {
      from: "CyberDigital",
      to:process.env.RECEVER,
      subject: "Contact Form From CyberDigital",
      text: "Something Happened",
      html: `
         <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto');
        </style>
            <h1>You've got a contact form from CyberDigital.</h1>
            <p style="color: black; font-weight: bold; font-size: 18px;">First Name: 
            <p style="font-size: 14px;"> ${req.body.username}</p>
            <p style="color: black; font-weight: bold; font-size: 18px;">Last Name:</p> 
            <p style="font-size: 14px;">${req.body.email}</p>
            <p style="color: black; font-weight: bold; font-size: 18px;">Message:</p> 
            <p style="font-size: 14px;">${req.body.message}</p>`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Email Sent");
      }
    });
    
    res.sendStatus(200);
  }
};
