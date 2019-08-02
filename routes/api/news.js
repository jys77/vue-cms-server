const express = require('express');
const router = express.Router();
const News = require('../../models/News')


// router.get('/getnews', (req, res) => {
//     News.find()
//           .then(news => {
//               if(!news) {
//                   res.send({
//                       status: -1
//                   })
//               }
//               res.send({
//                   status:0,
//                   message:JSON.parse(JSON.stringify(news))
//               })
//           })
// })

router.get('/getnews', (req, res) => {
    // let pageIdx = req.query.pageIdx || 1;
    // pageIdx = parseInt(pageIdx);

    News.findNews((err,data) => {
        if(err) return res.send({
            status: -1
        });

        //send JSON data
        res.send({
            status: 0,
            news: JSON.parse(JSON.stringify(data))
        })
    })
})

router.get('/getnewsinfo', (req, res) => {
    let newsId = req.query.newsId;
    // if(!newsId) newsId = 1;

    // News.find({
    //     _id: newsId
    // }, (err, data) => {
    //     if(err || !data.length) return res.send({
    //         status: -1
    //     })
    //     res.send({
    //         status: 0,
    //         news: data[0]
    //     })
    // })

    News.clicked(newsId, () => {
        News.find({
            _id: newsId
        }, (err, data) => {
            if(err || !data.length) return res.send({
                status: -1
            });

            //send JSON data
            res.send({
                status:0,
                news:data[0]
            })
        })
    })
})

// content = `<h4>Lorem Ipsum</h4>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante vel mauris lobortis commodo.</p>`
 
// const newslist = [
//     {
//         title: "News Title Test 1",
//         img_url: "http://wx4.sinaimg.cn/bmiddle/006GJQvhly1g3bq8i6yjvj30qo0qo42j.jpg",
//         abstract:"This is the news abstract 1",
//         content: content
//     },
//     {
//         title: "News Title Test 2",
//         img_url: "http://ww1.sinaimg.cn/bmiddle/9150e4e5gy1g4ydrtjcl0j20i30i33zl.jpg",
//         abstract:"This is the news abstract 2",
//         content: content
//     },
//     {
//         title: "News Title Test 3",
//         img_url: "http://wx3.sinaimg.cn/bmiddle/006m97Kgly1g4gq5r5flbj30rs0rs0xh.jpg",
//         abstract:"This is the news abstract 3",
//         content: content
//     },
//     {
//         title: "News Title Test 4",
//         img_url: "http://ww2.sinaimg.cn/bmiddle/9150e4e5gy1g3lbry90xtj208c08cjrq.jpg",
//         abstract:"This is the news abstract 4",
//         content: content
//     },
//     {
//         title: "News Title Test 5",
//         img_url: "http://wx1.sinaimg.cn/bmiddle/9e31678cgy1g4h4qvfnjaj20u00svq5w.jpg",
//         abstract:"This is the news abstract 5",
//         content: content
//     },
//     {
//         title: "News Title Test 6",
//         img_url: "http://wx4.sinaimg.cn/bmiddle/006GJQvhly1g3f7rst0o0j30pe0krjse.jpg",
//         abstract:"This is the news abstract 6",
//         content: content
//     },
//     {
//         title: "News Title Test 7",
//         img_url: "http://wx2.sinaimg.cn/bmiddle/86883a42gy1g3mn6546bsj208c06c74v.jpg",
//         abstract:"This is the news abstract 7",
//         content: content
//     },
//     {
//         title: "News Title Test 8",
//         img_url: "http://wx3.sinaimg.cn/bmiddle/006I1bcHly1g3n1swkn41j30b90b9t9i.jpg",
//         abstract:"This is the news abstract 8",
//         content: content
//     },
//     {
//         title: "News Title Test 9",
//         img_url: "http://wx1.sinaimg.cn/bmiddle/006GJQvhly1g32f4wn4bxj30u00u0ad3.jpg",
//         abstract:"This is the news abstract 9",
//         content: content
//     },
//     {
//         title: "News Title Test 10",
//         img_url: "http://wx3.sinaimg.cn/bmiddle/ceeb653ely1g329jo8h9oj206o06oq3d.jpg",
//         abstract:"This is the news abstract 10",
//         content: content
//     },
//     {
//         title: "News Title Test 11",
//         img_url: "http://wx4.sinaimg.cn/bmiddle/006m97Kgly1g4gq7beptzj30ny0mswha.jpg",
//         abstract:"This is the news abstract 12",
//         content: content
//     },
// ]

// News.insertMany(newslist)

module.exports = router