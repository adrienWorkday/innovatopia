const {MongoClient} = require('mongodb')


function createClient() {
    var username = process.env.DB_USERNAME;
    var password = process.env.DB_PASSWORD;
    var uri = `mongodb+srv://${username}:${password}@orbitcluster.dxwea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    return new MongoClient(uri);
}

async function getAllOffices() {
    const client = createClient();

    try {
        await client.connect();
        offices = await client.db("social_app").collection("office").find({}).toArray();
        return offices;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
getAllOffices().catch(console.error);

async function getAllOfficeNames() {
    const client = createClient();

    try {
        await client.connect();

        // This will only return office names
        const options = {
            projection: {_id: 0, officeName: 1}
        }

        offices = await client.db("social_app").collection("office").find({}, options).toArray();
        return offices;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
getAllOfficeNames().catch(console.error);

module.exports = {getAllOffices, getAllOfficeNames}