const express = require('express');
const app = express()
const PORT = 3011 || process.env.PORT



app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))