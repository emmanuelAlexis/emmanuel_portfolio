import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    // Vérifier que la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Configuration email manquante. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      );
    }

    // Vérifier que l'email de destination est configuré
    const toEmail = process.env.CONTACT_EMAIL || 'emmanueladolphe0401@gmail.com';

    // Envoyer l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Adresse par défaut de Resend (à changer avec votre domaine)
      to: [toEmail],
      replyTo: email, // Pour répondre directement à l'utilisateur
      subject: `Portfolio Contact: ${subject}`,
      html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
                                📬 Nouveau message de contact
                            </h1>
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 30px;">
                            <!-- Contact Info -->
                            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
                                <div style="margin-bottom: 15px;">
                                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Nom</p>
                                    <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 600;">${name}</p>
                                </div>
                                
                                <div style="margin-bottom: 15px;">
                                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
                                    <p style="margin: 5px 0 0 0;">
                                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 16px;">${email}</a>
                                    </p>
                                </div>
                                
                                <div>
                                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Sujet</p>
                                    <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 600;">${subject}</p>
                                </div>
                            </div>
                            
                            <!-- Message -->
                            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                                <h3 style="margin: 0 0 15px 0; color: #111827; font-size: 16px; font-weight: 600;">Message :</h3>
                                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                            
                            <!-- Reply Button -->
                            <div style="margin-top: 30px; text-align: center;">
                                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                                   style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                                    Répondre à ${name}
                                </a>
                            </div>
                        </div>
                        
                        <!-- Footer -->
                        <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; color: #6b7280; font-size: 12px;">
                                Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { message: 'Email envoyé avec succès', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
