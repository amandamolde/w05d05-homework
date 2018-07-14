const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const methodOverride = require('mthod-override');
app.use(methodOverride('_method'));

require('./db/db');

app.listen(3000, () => {
	console.log('Listening on port 3000');
});