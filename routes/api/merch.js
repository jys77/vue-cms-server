const express = require('express');
const router = express.Router();
const Merch = require('../../models/Merch')

router.get('/getcartlist/:ids',(req, res)=> {
    let items = req.params.ids.split(',')
    Merch.findByMerchIds(items, (err, data) => {
        if(err || data.length < 1) return res.send({
            status: -1
        })
        
        res.send({
            status: 0,
            cart: data
        })
    })
})

router.get('/getmerch', (req, res) => {
    let page = req.query.page || 1;
    page = parseInt(page);
    page = page <= 0 ? 1:page;
    Merch.findByPage(page, (err, data) => {
        if(err || data.length < 1) return res.send({
            status: -1
        })
        res.send({
            status: 0,
            merch: data
        })
    })
})

router.get('/getmerchinfo', (req, res) => {
    let id = req.query.merchId;
    Merch.findByMerchId(id, (err, data) =>{
        if(err || data.length < 1) return res.send({
            status: -1
        })
        res.send({
            status: 0,
            merch: data
        })
    })
})

// info = [
//     {
//         title: 'Utopia Bedding Gusseted Quilted Pillow (2-Pack) Bed Pillows',
//         old_price: 45.00,
//         new_price: 25.99,
//         photos: [
//             'https://images-na.ssl-images-amazon.com/images/I/318ZeyrrD4L._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/31YDdg0aTBL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/41HtYK3sPbL._AC_SY400_.jpg'
//         ],
//         stock:52
//     },
//     {
//         title: 'Beckham Hotel Collection Gel Pillow (2-Pack) - Luxury Plush Gel Pillow',
//         old_price: 79.99,
//         new_price: 35.99,
//         photos: [
//             'https://images-na.ssl-images-amazon.com/images/I/31HgavXy5ZL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/31Fpx46mGJL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/512nuzBj0FL._AC_SY400_.jpg'
//         ],
//         stock:36
//     },
//     {
//         title: 'Rivet Velvet Texture Decorative Throw Pillow, 17" x 17", Azure',
//         old_price: 39.99,
//         new_price: 29.39,
//         photos: [
//             'https://images-na.ssl-images-amazon.com/images/I/51WEIo763fL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/61bq0tOD4FL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/61qaNCpcs7L._AC_SY400_.jpg'
//         ],
//         stock:66
//     },
//     {
//         title: 'Stone & Beam Medallion Decorative Throw Pillow, Aqua',
//         old_price: 49.99,
//         new_price: 39.99,
//         photos: [
//             'https://images-na.ssl-images-amazon.com/images/I/61NIcYmgfpL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/61UoLQWQ-lL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/71ll5c8v6xL._AC_SY400_.jpg'
//         ],
//         stock:29
//     },
//     {
//         title: 'Rivet Bohemian Stripe Decorative Pillow, 17" x 17", Ink',
//         old_price: 45.00,
//         new_price: 39.99,
//         photos: [
//             'https://images-na.ssl-images-amazon.com/images/I/6104gi7EmWL._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/61HH0M1ZF2L._AC_SY400_.jpg',
//             'https://images-na.ssl-images-amazon.com/images/I/61UuxryTzfL._AC_SY400_.jpg'
//         ],
//         stock:32
//     },
// ]

// Merch.insertMany(info)


module.exports = router