import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validation basique
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // L'expéditeur doit être authentifié
            replyTo: email, // Pour répondre directement à l'utilisateur
            to: process.env.EMAIL_USER, // Vous recevez l'email
            subject: `Portfolio Contact: ${subject}`,
            text: `
        Nouveau message de contact:
        
        Nom: ${name}
        Email: ${email}
        Sujet: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouveau message de contact</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          <div style="margin-top: 20px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }
}
