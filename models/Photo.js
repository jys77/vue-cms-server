const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = Schema({
    //multiple photo urls
    phos:[String],
    intro: String,
    type:String
});

//find all types
PhotoSchema.statics.findAllTypes = function(callback){
    this.model('photo').find({},{type: 1}).distinct('type').exec(callback)
};

//find photos in a certain type
PhotoSchema.statics.findPho = function(type, callback){
    this.model('photo').find({
        type
    }).exec(callback)
}

PhotoSchema.statics.findByPhoId = function(phoId, callback){
    this.model('photo').findOne({
        _id:phoId
    },callback)
}


module.exports = Photo = mongoose.model('photo', PhotoSchema)