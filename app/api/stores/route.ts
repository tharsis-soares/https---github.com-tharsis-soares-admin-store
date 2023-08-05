import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs'
import prismadb from "@/lib/prismadb"


export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body = await req.json()

        const { name } = body
        if(!userId) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        if(!name) {
            return new NextResponse('Name is required', { status: 400 })
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId,
                corporateName: 'teste',
                document: 'teste',
                stateDoc: 'teste',
                cityDoc: 'teste',
                phoneNumber: 'teste',
                streetAddress: 'teste',
                addressNumber: 'teste',
                cityName: 'teste',
                stateName: 'teste',
                bankName: 'teste',
                accountNumber: 'teste',
                accountName: 'teste',
                accountType: 'teste',
            }
        })
        
        return NextResponse.json(store)

    } catch (err) {
        console.log('[STORES_POST]', err)
        return new NextResponse('Internal error', { status: 500 })        
    }
}