const company = require('../models').company;
module.exports = {
	create (req, res) {
return company
	.create({
		name: req.body.name,
	})
	.then(company => res.status(201).send(company))
	.catch(error => res.status(400).send(error));
	},
};