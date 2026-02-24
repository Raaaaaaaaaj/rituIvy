const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/contact", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Hotel Website" <${process.env.EMAIL_USER}>`, // ✅ sender = your gmail
            to: process.env.EMAIL_USER,
            replyTo: email, // ✅ user ka email yahan
            subject: "Hotel Website Contact",
            text: `
                    Name: ${name}
                    Email: ${email}
                    Phone: ${phone}
                    Subject: ${subject}
                    Message: ${message}
                    `,
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
