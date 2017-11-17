const mongoose = require ('mongoose');

//we create a variable Schema bringing from mongoose Schema
const Schema = mongoose.Schema;

//Create Schema
const IdeaSchema = new Schema({

    mds_ticker: {type: String, index: true},
    mds_ts: {type: Number, index: true},
    m:[String],
    t:[String]


    //title is an Object
   /*  title: {
        type:String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } */
});

//setup our created schema
mongoose.model('vola', IdeaSchema,  "vola");