const mongoose = require('mongoose');

const ProductSchemea = new mongoose.Schema({
  image : {
      type : String ,
      required : true ,
      unique: true
  },
  name : {
      type: String ,
  },
  price : {
      type: Number,
  }
});

module.exports = mongoose.model('Product',ProductSchemea);