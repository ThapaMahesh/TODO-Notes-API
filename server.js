// create express app
const express = require("express");
const cors = require('cors');
const app = express();

// get data
const initNotes = require("./notes")

app.use(cors({
    origin: '*'
}));

// simple get notes api
app.get('/notes', cors(), (req, res) => {
    return res.status(200).send(initNotes);
});

// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});