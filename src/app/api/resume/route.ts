import resume from './resume.json';

// You can convert the JavaScript object to JSON using JSON.stringify
const resumeJSON = JSON.stringify(resume, null, 2);

export async function GET() {
    return new Response(resumeJSON, {status: 200})
}