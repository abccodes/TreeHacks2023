import { action } from "../_generated/server";
import fetch from 'node-fetch';

export default action(async ({}, prompt) => {
    if (!prompt) throw new Error("Prompt not provided");

    console.log("Prompt: ", prompt);
    const response: Response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "model": "davinci:ft-personal-2023-02-19-08-15-34",
            "prompt": `${prompt} |||`,
            "max_tokens": 1262,
            "temperature": 0.4,
            "stop": "###"
        })
    });

    const responseText = await response.text();

    console.log(responseText);

    return responseText;
});
