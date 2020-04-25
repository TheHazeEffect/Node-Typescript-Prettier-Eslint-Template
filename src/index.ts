import express = require('express');
const port = 3000;
const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('hello World');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App Running on Port: ${port}`));
