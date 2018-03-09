const express = require('express');
const app = express();
const path = require('path');
app.use("/public", express.static(path.join(__dirname, 'public')));

const pug = require('pug');

const watIs = pug.compileFile('watis.pug');

const config = {
    port: process.env.PORT || 3000,
};

app.use(express.static('public'));

app.get('/kweenie/wat-is-express-js-en-waarvoor-dient-het', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(watIs({
        avatar: "user8.png",
        user: "Anneke Kodeur",
        likes: 20
    }));
    res.end();
});

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});