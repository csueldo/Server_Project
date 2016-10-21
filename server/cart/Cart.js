const mongoose = require('mongoose') ,
  Schema = mongoose.Schema,
  productSchema = new Schema(
    {
      // product_id: Schema.Types.ObjectId,
      title: String,
      price: Number ,
      image: String ,
      qty: Number
    }
  );


const Cart = new Schema(
  {
    products: [ productSchema ]
  }
);
module.exports = mongoose.model('Cart', Cart);
