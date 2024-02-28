const express = require('express');
const mongoose = requre('mongoose');
const corse = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

const kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = () => {
    const greeting = this.name ? 'My name is ${this.name}' : 'I have no name((';
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

app.listen(PORT, () => console.log('App is running on port: ${PORT}.'));