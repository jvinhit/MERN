const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');

const db = require('./db')
const movieRouter = require('./routes/movie-router')
const path = require('path');
const app = express()
const apiPort = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('/movies/list', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/', 'index.html'));
});

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
