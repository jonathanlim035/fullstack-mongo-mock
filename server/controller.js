// Controller here
// complete building out the controller
var Product = require('../db/')

const controller = {
  get: (req, res) => {
    Product.find({ })
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  post: (req, res) => {
    Product.create(req.body)
      .then(() => {
        res.status(200).send('Posted!')
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  put: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body)
      .then(() => {
        res.status(200).send('Updated!');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  delete: (req, res) => {
    Product.deleteOne({ _id: req.params._id })
      .then(() => {
        res.status(200).send('Deleted!');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}

module.exports = controller