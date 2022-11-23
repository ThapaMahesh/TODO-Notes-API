// create express app
const express = require("express");
const cors = require('cors');
const app = express();

// get data
const initNotes = require("./notes")
const port = process.env.PORT || 5000

app.use(cors({
    origin: '*'
}));

// simple get notes api
app.get('/', cors(), (req, res) => {
    return res.status(200).send("NOTE API");
});

// simple get notes api
app.get('/notes', cors(), (req, res) => {
    return res.status(200).send(initNotes);
});

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 5000");
});