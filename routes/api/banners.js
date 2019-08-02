const express = require('express');
const router = express.Router();
const Banner = require('../../models/Banner')

router.get('/getbanners', (req, res) => {
    Banner.find()
          .then(banners => {
              if(!banners) {
                  res.send({
                      status: -1
                  })
              }
              res.send({
                  status:0,
                  message:JSON.parse(JSON.stringify(banners))
              })
          })
})



module.exports = router