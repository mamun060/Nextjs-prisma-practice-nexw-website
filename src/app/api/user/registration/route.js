import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){
    try {
        let reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.users.create({
            data: reqBody
        });

        return NextResponse.json({status: "sucesses", data: result })
    } catch (error) {
        return NextResponse.json({status: "failed" , data: error })
    }
}