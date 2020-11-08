// Controller here
// complete building out the controller
var Product = require('../db/')
var helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  post: (req, res) => {
    helpers.postProductsHelper(req.body)
      .then(() => {
        res.status(200).send('Posted!')
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  put: (req, res) => {
    helpers.updateProductHelper({ _id: req.params._id }, req.body)
      .then(() => {
        res.status(200).send('Updated!');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  delete: (req, res) => {
    helpers.deleteProductHelper({ _id: req.params._id })
      .then(() => {
        res.status(200).send('Deleted!');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}

module.exports = controller