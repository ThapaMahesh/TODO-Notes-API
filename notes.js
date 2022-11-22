const {readFileSync} = require("fs");

const notesData = JSON.parse(readFileSync('data.json'))

module.exports = notesData