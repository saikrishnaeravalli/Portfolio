const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1150;
let visitCount = 0;
const counterFilePath = path.join(__dirname, 'visitCount.txt');
if (fs.existsSync(counterFilePath)) {
  visitCount = Number(fs.readFileSync(counterFilePath, 'utf-8')) || 0;
}
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Schedule a task to run at the end of the day (23:59:00)
cron.schedule('0 59 23 * * *', () => {
  // Read the visit count from the file
  if (fs.existsSync(counterFilePath)) {
    visitCount = Number(fs.readFileSync(counterFilePath, 'utf-8')) || 0;
  }

  // Define email data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Daily Visit Count',
    text: `The website has been visited ${visitCount} times today.`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
});

// Define a route to receive data from the frontend and send an email
app.post('/api/send-email', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service (e.g., Gmail)
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email address
        pass: process.env.EMAIL_PASS, // Replace with your email password or use environment variables
      },
    });

    // Define email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Replace with the recipient's email address
      subject: 'New Message from Your Website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Email sent successfully
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

// Define a route to serve the resume file for download
app.get('/api/download-resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'resume.pdf');
  res.sendFile(filePath);
});

app.post('/api/record-visit', (req, res) => {
  if (req.method === 'POST') {
    // Increment the visit counter
    visitCount++;
    // Update the visit count in the file
    fs.writeFileSync(counterFilePath, visitCount.toString());
    console.log(`Website has been visited ${visitCount} times`);
  }
  res.status(200).send('Visit recorded successfully');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
