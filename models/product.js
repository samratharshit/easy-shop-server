const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String,
        }],
    
    brand: {
            type: String,
            default: ''
        },    
    price: {
        type: Number,
        default:0

    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true

    },

    
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },

    rating : {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },

    numReviews : {
        type: Number,
        required: true,
        min: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCeated: {
        type: Date,
        default: Date.now
    } 
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();    //create a virtual id to replace _id default field in mongoose. Lecture 39
});

productSchema.set('toJSON',{
    virtuals: true        //this will allow sending virtuals to frontend also
})


exports.Product = mongoose.model('Product', productSchema);
