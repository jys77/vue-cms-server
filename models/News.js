const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NewsSchema = new Schema({
    id: {
        type:Number
    },
    add_time: {
        type:Date,
        default:Date.now()
    },
    clicked: {
        type:Number,
        default: 0
    },
    title: String,
    img_url: String,
    abstract: String,
    content: String

})

//find news by page
NewsSchema.statics.findNews = function(callback) {
    this.model('news').find({}).exec(callback);
};

//add 1 click as clicked
NewsSchema.statics.clicked = function(newsId, callback) {
    this.model('news').updateOne({
        '_id':newsId
    },{
        $inc:{
            'clicked': 1
        }
    },callback)
}

module.exports = News = mongoose.model('news', NewsSchema)