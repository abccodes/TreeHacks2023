import { httpRouter } from 'convex/server';
import { httpEndpoint } from './_generated/server';

const http = httpRouter();

async function parseStream(stream) {
    const decoder = new TextDecoder();
    const reader = stream.getReader();
    let result = '';
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
        return result;
        }
        result += decoder.decode(value);
    }
}

function generateUUID() {
    let uuid = '';
    const chars = '0123456789abcdef';
  
    for (let i = 0; i < 36; i++) {
      if (i === 8 || i === 13 || i === 18 || i === 23) {
        uuid += '-';
      } else if (i === 14) {
        uuid += '4';
      } else {
        uuid += chars[Math.floor(Math.random() * 16)];
      }
    }
  
    return uuid;
}

const queryDb = httpEndpoint(async ({ runQuery }, request) => {
    const body = await request.json();
    const uuid = body.uuid;
    
    if (!uuid) {
        return new Response('UUID not provided', {
            status: 400,
        });
    };

    const result = await runQuery('query', uuid);
    return new Response(JSON.stringify({ html: result[0].body }), {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/text",
        },
        status: 200,
    });
});

const promptModel = httpEndpoint(async ({ runAction, runMutation }, request) => {
    const body = await request.json();
    const prompt = body.prompt;
    if (!prompt) {
        return new Response('Prompt not provided', {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            status: 400,
        });
    }
    console.log(prompt);

    const html = await runAction('actions/fetchAction', prompt);
    const uuid = generateUUID();
    await runMutation('dbinsert', uuid, html);

    return new Response(JSON.stringify({ uuid, html }), {
        headers: {
            "Access-Control-Allow-Origin": "*",
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

http.route({
    path: '/queryDb',
    method: 'POST',
    handler: queryDb,
})

export default http;
