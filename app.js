const express = require('express');
// deprecated: const bodyParser = require('body-parser');

const app = express();

// deprecated: app.use(bodyParser.json())
// deprecated: app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send("Hello world!")
})

app.listen(3333)