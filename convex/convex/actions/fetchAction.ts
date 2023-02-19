import { action } from "../_generated/server";
import fetch from 'node-fetch';

export default action(async ({ }, prompt) => {
    if (!prompt) throw new Error("Prompt not provided");

    console.log("Prompt: ", prompt);
    const response = await fetch('https://api.openai.com/v1/completions', {
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

    let responseText = await response.text();
    let responseJson = JSON.parse(responseText);
    responseText = responseJson.choices[0].text;
    const formatted_response = responseText.replace(/\n/g, "\n");

    console.log(formatted_response);

    return formatted_response;
});
