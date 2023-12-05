const express = require('express')

app = express();

const port = 3000;

app.get('/', (req, res) => res.json('Hello ivan ahahha buf'));

app.listen(port, () => {
    console.log('App is listening on port ' + port)
})