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
            <div>
                <h2>${subject}</h2>
                <h4>${message}</h4>
                <br/><br/><br/><br/>
                <h5>Este mensaje fue enviado por ${name} a través del formulario de contacto de Leonor Berdichevsky Homeopata Online.</h5>
            </div>
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
