const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/koadb';

module.exports = function(app) {
    MongoClient.connect(url, { useNewUrlParser: true })
        .then((con) => { console.log('Database connected!') })
        .catch((err) => { console.error(err) })
}