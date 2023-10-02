
export async function GET(req: Request) {
    return new Response('hello world', {status: 200})
}

export async function POST(req: Request) {
    let body = await req.json()
    console.log(body)
    return new Response('hello post', {status: 200})
}

export async function PUT(req: Request) {
    let body = await req.json()
    console.log(body)
    return new Response('hello put', {status: 200})
}

export async function DELETE(req: Request) {
    let body = await req.json()
    console.log(body)
    return new Response('hello delete', {status: 200})
}
