# Vue CMS Mobile Data Dictionary

## Banner
```javascript
const BannerSchema = new Schema({
    img: {
        type:String
    }
})
```

## News
```javascript
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
```

## Photo
```javascript
const PhotoSchema = Schema({
    //multiple photo urls
    phos:[String],
    intro: String,
    type:String
});
```

## Merch
```javascript
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
```
