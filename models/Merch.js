const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PAGE_SIZE = 8;

const MerchSchema = new Schema({
    title: String,
    old_price: Number,
    new_price: Number,
    stock: Number,
    count: Number,
    add_Date: {
        type: Date,
        default: new Date()
    },
    photos:[String]
})

MerchSchema.statics.findByPage = function(pageIdx, callback){
    this.model('merch').find({}).skip(PAGE_SIZE * (pageIdx -1)).limit(PAGE_SIZE).exec(callback)
}

MerchSchema.statics.findByMerchId = function(id, callback) {
    this.model('merch').findOne({_id:id},callback)
}

MerchSchema.statics.findByMerchIds = function(ids, callback) {
    this.model('merch').find({_id: { $in: ids}},callback)
}

module.exports = Merch = mongoose.model('merch', MerchSchema)