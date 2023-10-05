import resume from './resume.json';

export async function GET() {
    // You can convert the JavaScript object to JSON using JSON.stringify
    return new Response(JSON.stringify(resume, null, 2), {status: 200})
}