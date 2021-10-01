require('dotenv').config();
const {MongoClient} = require('mongodb')

async function list() {
    var username = process.env.DB_USERNAME;
    var password = process.env.DB_PASSWORD;
    var uri = `mongodb+srv://${username}:${password}@orbitcluster.dxwea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

list().catch(console.error);

async function listDatabases(client) {
    databaselist = await client.db().admin().listDatabases();
    console.log("Databases:");
    databaselist.databases.forEach(db => console.log(` - ${db.name}`))
}

module.exports.list = list;