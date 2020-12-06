const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
    res.status(200).json({
        data: "Hola mundo :)"
    })
});

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT ${port}`);
});

