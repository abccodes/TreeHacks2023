import { httpRouter } from 'convex/server';
import { httpEndpoint } from './_generated/server';

const http = httpRouter();

const promptModel = httpEndpoint(async ({ runAction }, request) => {

    const prompt = request.headers.get('Prompt');
    if (!prompt) {
        return new Response('Prompt not provided', {
            status: 400,
        });
    }
    console.log(prompt);

    const response = await runAction('actions/fetchAction', prompt);
    // const gptOutput = response.choices[0].text;
    
    return new Response(response, {
        headers: {
            "content-type": "application/json",
        },
        status: 200,
    });
});

http.route({
    path: '/promptModel',
    method: 'POST',
    handler: promptModel,
});

export default http;
