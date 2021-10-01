const {MongoClient} = require('mongodb')

async function getOffices() {

    var username = process.env.DB_USERNAME;
    var password = process.env.DB_PASSWORD;
    var uri = `mongodb+srv://${username}:${password}@orbitcluster.dxwea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

    const client = new MongoClient(uri);

    try {
        await client.connect();
        return await getAllOffices(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

getOffices().catch(console.error);

async function getAllOffices(client) {
    offices = await client.db("social_app").collection("office").find({}).toArray();
    return offices;
    // console.log("Offices");
    // console.log(offices);
    // offices.forEach(office => console.log(`${office.officeName}`))
}


module.exports = {getOffices}