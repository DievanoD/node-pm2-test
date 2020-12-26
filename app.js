const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRoute = require('./src/routes/indexRoute');

const PORT = process.env.PORT || 7000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, './src/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});