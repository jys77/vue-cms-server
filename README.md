# Node.js server
> A node.js backend server for my [Vue CMS mobile application](https://github.com/jys77/vue-cms-mobile).

The server uses node.js Express framework and mongoDB to accomplish the deployment of API service for my Vue learning project.

## Install
1. Create `config/keys.js` in the dir. Save your MongoDB connection string here as:
```javascript
module.exports = {
    mongoURI: 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]'
}
```

2. Run `npm install`.

3. Run `npm run server`

## [Data Dictionary](DataDictionary.md)
The data schemas were created by Mongoose.

## [API](API.md)
Fetch the data by the REST API.