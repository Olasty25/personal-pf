import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // or "smtp.yourhost.com"
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: "you@yourdomain.com", // your inbox
    subject: `New contact from ${name}`,
    text: message,
  });

  res.send("Message sent!");
});

app.listen(3000);
