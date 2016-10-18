const productRoutes = require('./products/productRoutes.js');

module.exports = app => {
  productRoutes(app);
}
