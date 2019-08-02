const express = require('express');
const router = express.Router();
const Photo = require('../../models/Photo')

router.get('/getphotypes', (req, res) => {
    Photo.findAllTypes((err, data)=> {
        if(err) return res.send({
            status: -1
        })

        res.send({
            status: 0,
            types: data
        })
    })
})

router.get('/getphos', (req, res) => {
    let type = req.query.type
    if (type == 'All') {
        Photo.find({},(err, data)=> {
            if(err||!data.length) return res.send({
                status: -1
            })
    
            res.send({
                status: 0,
                phos: data
            })
        })
    }else{
        Photo.findPho(type, (err, data) => {
            if(err||!data.length) return res.send({
                status: -1
            })
    
            res.send({
                status: 0,
                phos: data
            })
        })
    }
})

router.get('/getphodetail', (req, res) => {
    let phoId = req.query.phoId
    Photo.findByPhoId(phoId, (err, data) => {
        if(err) return res.send({
            status: -1
        })

        res.send({
            status: 0,
            pho: data
        })
    })
})

// let photos = [
//     {
//         type: 'Animals',
//         phos: [
//             'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__480.jpg',
//             'https://cdn.pixabay.com/photo/2014/02/24/08/28/huskies-273409__480.jpg',
//             'https://cdn.pixabay.com/photo/2014/05/19/22/20/retriever-348572__480.jpg'
//         ],
//         intro: 'This is a series of Photos of lovely DOGS!'
//     },
//     {
//         type: 'Animals',
//         phos: [
//             'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__480.png',
//             'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__480.jpg',
//             'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__480.jpg'
//         ],
//         intro: 'This is a series of Photos of lovely CATS!'
//     },
//     {
//         type: 'Fashion',
//         phos: [
//             'https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718__480.jpg',
//             'https://cdn.pixabay.com/photo/2016/11/16/10/26/girl-1828536__480.jpg',
//             'https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236__480.jpg'
//         ],
//         intro: 'Fashion and Beauty (Collection 1). The photos are all from pixabay.com'
//     },
//     {
//         type: 'Fashion',
//         phos: [
//             'https://cdn.pixabay.com/photo/2017/05/11/08/48/model-2303361__480.jpg',
//             'https://cdn.pixabay.com/photo/2018/01/11/09/52/three-3075752__480.jpg',
//             'https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435__480.jpg'
//         ],
//         intro: 'Fashion and Beauty (Collection 2). The photos are all from pixabay.com'
//     },
//     {
//         type: 'Nature',
//         phos: [
//             'https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533__480.jpg',
//             'https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213__480.jpg',
//             'https://cdn.pixabay.com/photo/2015/07/13/11/56/girl-843076__480.jpg'
//         ],
//         intro: 'Human and Nature. Photos are all collected form pixabay.com'
//     },
//     {
//         type: 'Sports',
//         phos: [
//             'https://cdn.pixabay.com/photo/2015/03/14/18/23/basketball-673581__480.jpg',
//             'https://cdn.pixabay.com/photo/2015/02/27/17/15/basketball-652437__480.jpg',
//             'https://cdn.pixabay.com/photo/2015/02/20/18/21/basketball-643450__340.jpg'
//         ],
//         intro: 'Photos about Basketball'
//     },
//     {
//         type: 'Sports',
//         phos: [
//             'https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558__340.jpg',
//             'https://cdn.pixabay.com/photo/2015/03/01/22/27/relay-race-655353__340.jpg',
//             'https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465__340.jpg'
//         ],
//         intro: 'Phtos about Running'
//     },
//     {
//         type: 'Travel',
//         phos: [
//             'https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068__340.jpg',
//             'https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389__340.jpg',
//             'https://cdn.pixabay.com/photo/2015/03/26/11/05/person-692406__340.jpg'
//         ],
//         intro: 'Photos about Traveling'
//     },
//     {
//         type: 'Music',
//         phos: [
//             'https://cdn.pixabay.com/photo/2015/09/17/14/24/guitar-944261__340.jpg',
//             'https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347__340.jpg',
//             'https://cdn.pixabay.com/photo/2015/09/05/20/39/acoustic-925174__340.jpg'
//         ],
//         intro: 'Photos about Music and Entertainment.'
//     }
// ]

// Photo.insertMany(photos)





module.exports = router