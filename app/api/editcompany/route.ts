import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    console.log(searchParams);
    const idparam = searchParams.get('id');
    const id = parseInt(idparam?.toString() || "0");
    const business = searchParams.get('business');
    const website = searchParams.get('website');
    const costofsales = searchParams.get('costofsales')?.toString();
    const turnover = searchParams.get('turnover')?.toString();
    const profit = searchParams.get('profit')?.toString();


    const update = await prisma.ecomm.update({
        where: { id: id },
        data: { principal_activity: business, website_1: website, cost_of_sales: costofsales, turnover: turnover, profit: profit }
    });
    return NextResponse.json({ update })
}