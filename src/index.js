const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express();

mongoose.connect('mongodb+srv://bhruno:olamundo@cluster0-jd55l.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3333)