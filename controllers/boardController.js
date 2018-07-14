const express = require('express');
const router = express.Router();

const Paddleboards = require('../models/paddleboard');

router.get('/', (req, res) => {
	Paddleboards.find({}, (err, foundBoards) => {
		if(err) {
			res.send(err);
		} else {
			res.render('index.ejs', {boards: foundBoards});
		}
	})
});

module.exports = router;