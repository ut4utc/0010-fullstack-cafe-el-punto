const mongoose = require('mongoose')
const Shema = mongoose.Schema

const orderShema = new Shema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true
    },
    list: [
        {
            name: {
                type: String
            },
            quontity: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    user: {
        ref: 'users',
        type: Shema.Types.ObjectId
    }
})

// название колекции orders
module.exports = mongoose.model('orders', positionShema)
