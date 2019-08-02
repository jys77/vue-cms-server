const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    img: {
        type:String
    }
})

module.exports = Banner = mongoose.model('banners', BannerSchema)