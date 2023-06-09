const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

const app = express();

const dotenv = require("dotenv")
dotenv.config()

// Serve static files from the "build" directory
app.use(express.static("build"));
app.use(express.json());
app.use(cors())

// Configure OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Route to handle API completion
app.post("/api/completions", async (req, res) => {
    const { model, prompt, temperature, max_tokens } = req.body;

    try {
        const response = await openai.createCompletion({
            model: model,
            prompt: prompt,
            temperature: temperature,
            max_tokens: max_tokens,
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
