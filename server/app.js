const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1150;
app.use(cors());

app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to receive data from the frontend and send an email
app.post('/send-email', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service (e.g., Gmail)
      auth: {
        user: 'eravallisaikrishna@gmail.com', // Replace with your email address
        pass: 'iinypvapasgkykhy', // Replace with your email password or use environment variables
      },
    });

    // Define email data
    const mailOptions = {
      from: 'eravallisaikrishna@gmail.com',
      to: 'saikrishnaeravalli@gmail.com', // Replace with the recipient's email address
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
app.get('/download-resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'resume.pdf');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
