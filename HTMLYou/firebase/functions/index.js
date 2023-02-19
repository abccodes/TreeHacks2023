import fetch from 'node-fetch';
import functions from "firebase-functions";
import admin from "firebase-admin";

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

export const queryModel = functions.https.onRequest(async (req, res) => {
    const prompt = req.query.prompt;
    if (!prompt) {
        res.status(400).send('Missing prompt');
        return;
    }
    console.log(prompt);

    fetch('https://api.openai.com/v1/completions', {
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
    })
    .then(async (response) => {
        res.status(200).send(await response.text());
    })
    .catch((error) => {
        console.error(error);
    })
});
