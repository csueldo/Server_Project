const mongoose = require('mongoose');

const Product = new mongoose.Schema(
  {
    title: {type: String, required: true} ,
    price: {type: Number, required: true} ,
    productType: {type: String},
    woodType: {type: String},
    image: {type: String} ,
    imageHover: {type: String} ,
    ui: {type: String} ,
    quantity: {type: Number}
  }
)

module.exports = mongoose.model('Product', Product);
