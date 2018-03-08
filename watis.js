const express = require('express');
const app = express();

const pug = require('pug');

const watIs = pug.compileFile('watis.pug');
const nav = pug.compileFile('nav.pug');

const config = {
    port: 3000,
};

app.get('/watis', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(watIs());
    res.write(nav());
    res.end();
});

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});