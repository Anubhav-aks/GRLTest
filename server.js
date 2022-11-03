const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')

// const api = require('index.html')
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client')))



app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/client/index.html'));
})

app.use('*', (req, res) => {
    res.sendFile(path.join('index.html'))
})

app.listen(PORT, () => {

    console.log('Server running at port ' + PORT)

})