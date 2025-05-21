const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendNotificationEmail = (enrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // or another email address
    subject: 'New Enquiry Submitted',
    text: `A new enquiry has been submitted:\n\nName: ${enrollment.name}\nEmail: ${enrollment.email}\nPhone: ${enrollment.phone}\nMessage: ${enrollment.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendNotificationEmail;
