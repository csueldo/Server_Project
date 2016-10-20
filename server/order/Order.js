const mongoose = require('mongoose') ,
  Schema = mongoose.Schema ,
  Product = require('../products/Products.js'),
  Cart = require('../cart/Cart.js');

  const Order = Schema(
    {
      cart: {type: Schema.Types.ObjectId, ref: 'Cart', required: true} ,
      products: [Cart.products] ,
      orderDate: {type: Date, default: new Date()}
    }
  )

  module.exports = Schema.model('Order', Order);
