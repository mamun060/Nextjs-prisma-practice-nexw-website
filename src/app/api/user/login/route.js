import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { CreateToken } from "@/utility/JWTTokenHelper";


export async function POST(req, res){
    try {
        const reqData = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.users.findUnique({
            where: reqData
        });

        if(!'id' in result){
            return NextResponse.json({status:"Login Failed", data: result });
        } else {
            let token = await CreateToken(result['email'], result['id'], result['firstName']);
            const expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const cookieString = `token=${token}; expires=${expireDuration}; path=/ `;
            
            return NextResponse.json(
                {
                    status: "success", 
                    data: token
                },
                {
                    status: 200,
                    headers: {'set-cookie': cookieString}
                }
                )
        }
    } catch (error) {
        return NextResponse({status: "Something is wrong!", data: error})
    }
}

export async function GET(){
    const expireDuration = new DataTransfer( Date.now() - 24 * 60 * 60 * 1000);
    const coockieString = `token=${""}; expires=${expireDuration}; path=/ `
    return NextResponse.json({ status: "success" , data: ""}, { status: 200, headers: {'set-cookie': coockieString}})
}