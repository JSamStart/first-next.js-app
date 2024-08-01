import { WelcomeTemplate } from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
    await resend.emails.send({ from: "", to: "jochen.siegle@murrelektronik.de", subject: "...", react: <WelcomeTemplate name="Jochen" /> });

    return NextResponse.json({});
}
