const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello from CI/CD Pipeline');
    res.send('oidc deploment test version 2');
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});