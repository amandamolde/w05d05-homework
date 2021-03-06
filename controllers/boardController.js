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

router.get('/new', (req, res) => {
	res.render('new.ejs');
});

router.post('/', (req, res) => {
	Paddleboards.create(req.body, (err, createdBoard) =>{
		if (err) {
			res.send(err);
		} else {
			res.redirect(`/paddleboards/${createdBoard.id}`);
		}
	})
});

router.get('/:id', (req, res) => {
	Paddleboards.findById(req.params.id, (err, board) => {
		if (err) {
			res.send(err);
		} else {
			res.render('show.ejs', {board: board});
		}
	})
});

router.get('/:id/edit', (req, res) => {
	Paddleboards.findById(req.params.id, (err, board) => {
		if (err) {
			res.send(err);
		} else {
			res.render('edit.ejs', {board: board});
		}
	})
});

router.put('/:id', (req, res) => {
	Paddleboards.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, board) => {
		if(err) {
			res.send(err);
		} else {
			res.redirect('/paddleboards');
		}
	})
});

router.delete('/:id', (req, res) => {
	Paddleboards.findByIdAndRemove(req.params.id, (err, board) => {
		if(err) {
			res.send(err);
		} else {
			res.redirect('/paddleboards');
		}
	})
});

module.exports = router;