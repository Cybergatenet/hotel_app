const express = require('express');
const app = express()
const PORT = 3011 || process.env.PORT;
const path = require('path')


// app.use(express.static('public'))
// app.use('/static', express.static('public'))
// app.use(express.static('files'))
app.use(express.static(__dirname + 'public'))

app.get('/', (req, res) => {
    // app.use('/static', express.static(path.join(__dirname, 'public')))
    res.sendFile(path.join(__dirname, '../public', './index.html'))
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))