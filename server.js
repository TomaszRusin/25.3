
const express = require('express');

const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();

var stringifyFile

app.use(bodyParser.json());

app.get('/getNote', (req, res, next) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if(err) throw err;
        stringifyFile = data;
        res.send(data);
    })
})

app.post('/updateNote/:note', (req, res, next) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if(err) throw err;
        data += req.params.note;
        stringifyFile = data;
        fs.writeFileSync('./test.json', stringifyFile, (err) => {
            if(err) throw err;
            console.log('file updated');
        })
    })
   
})

app.listen(3000);