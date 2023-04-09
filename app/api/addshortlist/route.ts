import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const idparam = searchParams.get('id');
    const id = parseInt(idparam?.toString() || "0");

    const update = await prisma.ecomm.update({
        where: { id: id },
        data: { shortlist: true }
    });
    return NextResponse.json({ update })
}