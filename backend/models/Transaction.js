const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],
        totalPrice: {
            type: Number,
            default: null
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timeseries: true
    }
);

module.exports = mongoose.model('Transaction', transactionSchema);