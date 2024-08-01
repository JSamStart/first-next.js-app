import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma?.user.findUnique({ where: { id: parseInt(params.id) } });

    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();

    const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });

    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 });
    }
    if (!body.name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    } else {
        const updatedUser = await prisma.user.update({ where: { id: user.id }, data: { name: body.name, email: body.email } });

        return NextResponse.json(updatedUser, { status: 201 });
    }
}
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });

    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 });
    } else {
        await prisma.user.delete({ where: { id: user.id } });

        return NextResponse.json({});
    }
}
