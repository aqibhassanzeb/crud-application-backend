import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    }
},
    { timestaps: true }
)

export const Product = mongoose.model('productlist', ProductSchema)