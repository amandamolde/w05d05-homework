const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const boardController = require('./controllers/boardController');
app.use('/paddleboards', boardController);

require('./db/db');

app.listen(3000, () => {
	console.log('Listening on port 3000');
});