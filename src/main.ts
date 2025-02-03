import express from 'express';
import OpenAI from 'openai';

const app = express();
app.use(express.json());
app.use(express.static('public'));

const client = new OpenAI({
    baseURL: "http://localhost:11434/v1",
    apiKey: "ollama"
});

app.post("/prompt", async (req, res) => {
    const { body } = req;

    if (!body.correctCode || !body.studentCode || !body.exerciseDescription) {
        res.status(400).json({ error: "Missing required fields: correctCode, studentCode, exerciseDescription" });
        return;
    }

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    const stream = await client.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "Eres un experto en C++ que evalúa código de estudiantes. Debes comparar el código del estudiante con el código correcto y verificar si cumple con la descripción del ejercicio. Proporciona retroalimentación detallada sobre si cumple los requisitos, posibles mejoras y buenas prácticas."
            },
            {
                role: "user",
                content: `Ejercicio: ${body.exerciseDescription}\n\nCódigo Correcto:\n${body.correctCode}\n\nCódigo del Estudiante:\n${body.studentCode}`
            }
        ],
        model: "deepseek-r1:8b",
        stream: true
    });

    for await (const chunk of stream) {
        const content = chunk.choices[0].delta.content;
        res.write(content);
    }

    res.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
