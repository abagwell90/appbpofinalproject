
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const favicon = require('express-favicon')
const path = require('path');
const google = require("./googlesheetapi")

const port = process.env.PORT || 4000;

const app = express()

app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/', (req, res) => {
    google.writeAnswers(req.body);
    return res.send('submitted');
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));