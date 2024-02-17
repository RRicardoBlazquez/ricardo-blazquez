import { transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";


export async function POST(req: Request): Promise<NextResponse> {

    const { asunto, message, email } = await req.json();

    try {

        await transporter.sendMail({
            to: `rblazquez111@gmail.com`,
            subject: `${asunto}`,
            text: `${email}`,
            html: `<p>${message},</p>`
        })
        return NextResponse.json({ message: 'Mail enviado con exito' });
    } catch (error) {
        return NextResponse.json(error);
    }

}