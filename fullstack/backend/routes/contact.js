import express from "express";
import { Resend } from "resend";

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
    console.log("Kontaktanfrage:", req.body);

    const { vorname, nachname, email, telefon, nachricht } = req.body;

    const result = await resend.emails.send({
        from: "Website <onboarding@resend.dev>",
        to: "vansh.gagan.11@gmail.com",
        replyTo: email,
        subject: `Neue Kontaktanfrage von ${vorname} ${nachname}`,
        html: `
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${vorname} ${nachname}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${telefon}</p>
            <p><strong>Nachricht:</strong></p>
            <p>${nachricht}</p>
        `
    });

    console.log("Resend:", result);

    res.json({ success: true });
});

export default router;
