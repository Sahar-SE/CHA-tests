const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
app.post('/send-email', (req, res) => {
  const { name, email, skill, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'saharsaba.amiri123@gmail.com',
      pass: 'txez ykol fylk ytbz',
    },
  });

  const mailOptions = {
    from:email,
    to:  'saharsaba.amiri123@gmail.com',
    subject: 'Report Submission from: ' + name,
    html: `
      <div style="border: 1px solid black; padding: 20px; width: 50%; margin: auto">
        <h3>A New Report For Report!</h3>
        <p>Name: ${name}</p>
        <p>Message: ${message}</p>
        <p>Skill: ${skill}</p>
        <a style="background-color: #1DA1F2; color: white; padding: 10px; text-decoration: none; border-radius: 5px;"
        href="http://localhost:3000/review">Confirm</a>
      </div>
    `,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});