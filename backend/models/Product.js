const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    image: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);