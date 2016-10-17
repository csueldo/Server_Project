const mongoose = require('mongoose');

const Product = mongoose.Schema(
  {
    title: {type: String, required: true} ,
    price: {type: Number, required: true} ,
    image: {type: String} ,
    imageHover: {type: String} ,
    quantity: {type: Number}
  }
)

module.exports = mongoose.model('Product', Product);
