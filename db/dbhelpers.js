var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({ }),
  postProductsHelper: (data) => Product.create(data),
  updateProductHelper: (id, value) => Product.findOneAndUpdate(id, value),
  deleteProductHelper: (id) => Product.deleteOne(id)
};

module.exports = helpers