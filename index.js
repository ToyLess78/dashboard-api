import express from 'express';

const port = 8000;

const app = express();

app.get('/hello', (req, res) => {
    res.end('Hi!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});