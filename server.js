const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const playersGigsRoutes = require('./routes/playersGigs');
const jobsRoutes = require('./routes/jobs');

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

app.use('/players', playersGigsRoutes);
app.use('/jobs', jobsRoutes);


app.listen(3000, () => console.log(`Listening on PORT: 3000`));
