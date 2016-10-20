const productRoutes = require('./products/productRoutes.js');
const cartRoutes = require('./cart/cartRoutes.js');
const orderRoutes = require('./order/orderRoutes.js');

module.exports = app => {
  productRoutes(app);
  cartRoutes(app);
  orderRoutes(app);
}
