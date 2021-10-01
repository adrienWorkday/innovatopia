const {MongoClient} = require('mongodb')


function createClient() {
    var username = process.env.DB_USERNAME;
    var password = process.env.DB_PASSWORD;
    var uri = `mongodb+srv://${username}:${password}@orbitcluster.dxwea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    return new MongoClient(uri);
}

module.exports = {createClient}