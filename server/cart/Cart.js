const mongoose = require('mongoose') ,
  Schema = mongoose.Schema,
  Product = ('../products/Product.js');

const Cart = Schema(
  {
    products: [
      {
        productId: {type: Schema.Types.ObjectId, ref: 'Product', required: true },
        qty: { type: Number, min: 1 }
      }
    ]
  }
)
module.exports = mongoose.model('Cart', Cart);
