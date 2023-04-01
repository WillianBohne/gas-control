import { NextResponse } from "next/server";
import { handleIsert, handleGetAll, handleUpdate, handleRemove } from "../../../modules/Service/ConsumoService"

export async function POST(request) {
    const body = await ReadableStreamBYOBRequest.json();
    const result = await handleIsert(body)
    return NextResponse.json(result.dat, { status: result.status })
}

export async function GET() {
    const result = await handleGetAll()
    return NextResponse.json(result.data, { status: result.status })
}

export async function PUT(request) {
    const body = await ReadableStreamBYOBRequest.json();
    const result = await handleUpdate(body)
    return NextResponse.json(result.dat, { status: result.status })
}

export async function DELETE() {
    const { searchParams } = new URL(request.URL)
    const id = parseInt(searchParams.get('id'))
    const result = await handleRemove(id)
    return NextResponse.json(result.dat, { status: result.status })
}

