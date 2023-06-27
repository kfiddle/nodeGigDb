const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


console.log('loooo this is cool')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});



app.get('/clicked', (req, res) => {
    res.status(201).json({ answer: 'hello back' })
})

app.listen(3000, () => console.log(`Listening on PORT: 3000`));
