const productRoutes = require('./products/productRoutes.js');
const cartRoutes = require('./cart/cartRoutes.js');

module.exports = app => {
  productRoutes(app);
  cartRoutes(app);
}
