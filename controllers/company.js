const visitor = require('../models').visitor;

module.exports = {
	create (req, res) {
return visitor
	.create({
		visitorName: req.body.name,
	})
	.then(visitor => res.status(201).send(visitor))
	.catch(error => res.status(400).send(error));
	},
};