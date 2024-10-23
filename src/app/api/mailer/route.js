import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(request) {
    // Obteniendo los datos del cuerpo de la solicitud
    const { name, email, subject, message } = await request.json();
	console.log(message)

    // Creando el transporte de correo
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    // Opciones del correo
    const mailOptions = {
        from: process.env.SMTP_USERNAME,
        to: process.env.SMTP_USERNAME,
        subject: subject,
        replyTo: email,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container {
                    width: 100%;
                    padding: 20px;
                    background-color: #F7B4ECFF;
                    font-family: Arial, sans-serif;
                    color: black;
                }
                .header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    text-align: center;
                }
                .content {
                    margin: 20px;
                    padding: 20px;
                    background-color: white;
                    border-radius: 5px;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    background-color: #ddd;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>${subject}</h2>
                    <h5>Mensaje enviado desde ${email}</h5>
                </div>
                <div class="content">
                    <p>${message}</p>
                    <br/><br/><br/><br/>
                    <p>Este mensaje fue enviado por ${name} a través del formulario de contacto de Leonor Berdichevsky Homeopata Online.</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Leonor Berdichevsky. Todos los derechos reservados.</p>
                </div>
            </div>
        </body>
        </html>
    `,
    };

    try {
        // Enviando el correo
        await transporter.sendMail(mailOptions);
        // Retornando una respuesta exitosa
        return NextResponse.json({ message: "¡Mensaje Enviado Exitosamente!" });
    } catch (error) {
        console.error("Error:", error);
        // Retornando una respuesta de error
        return NextResponse.json({ error: "¡Oh no! Algo salió Mal con tu Email" }, { status: 500 });
    }
}
