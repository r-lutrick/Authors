// Import model
const AuthorModel = require('../models/authors.model')

// Create
module.exports.addOne = (req, res) => {
    AuthorModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
}

// Read
module.exports.getAll = (req, res) => {
    AuthorModel.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Read one
module.exports.getOne = (req, res) => {
    AuthorModel.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Update
module.exports.updateOne = (req, res) => {
    AuthorModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteOne = (req, res) => {
    AuthorModel.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}