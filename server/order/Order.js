const mongoose = require('mongoose') ,
  Schema = mongoose.Schema ,
  Product = ('../products/Products.js'),
  Cart = ('../cart/Cart.js');

  const Order = new Schema(
    {
      cart: {type: Schema.Types.ObjectId, ref: 'Cart', required: true} ,
      orderDate: {type: Date, default: new Date()}
    }
  )

  module.exports = mongoose.model('Order', Order);
