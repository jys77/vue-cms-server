const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./config/keys').mongoURI;

const banners = require('./routes/api/banners');
const news = require('./routes/api/news')
const photos = require('./routes/api/photos')
const merch = require('./routes/api/merch')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//alow all forms of request
app.use(cors())


//connect to database
mongoose.connect(db, { useNewUrlParser: true }).then(() =>{
    console.log('mongoDB connected');
})


// app.get('/', (req, res) => {
//     res.send("Hello!")
// })

app.use('/api', banners)
app.use('/api', news)
app.use('/api', photos)
app.use('/api', merch)

const port = process.env.PORT || 3030;
app.listen(port, ()=> {
    console.log(`The server is running on port ${port}...`)
})