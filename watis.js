const express = require('express');
const app = express();
const path = require('path');
app.use("/public", express.static(path.join(__dirname, 'public')));

const pug = require('pug');

const layout = pug.compileFile('layout.pug');
const watIs = pug.compileFile('watis.pug');

const config = {
    port: 3000,
};

app.use(express.static('public'));

app.get('/watis', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(watIs());
    res.end();
});

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});