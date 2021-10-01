var database = require('./database')
var ObjectId = require('mongodb').ObjectId; 
    



async function getAllEmployees() {
    const client = database.createClient();
    
    try {
        await client.connect();
        employees = await client.db("social_app").collection("employee").find({}).toArray();
        return employees;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
getAllEmployees().catch(console.error);

async function getAllEmployeesInOfficeOnDate(officeID, date) {
    const client = database.createClient();
    var testID = "6156e630e9269a37c4af6940";
    var o_id = new ObjectId(testID);

    try {
        await client.connect();
        const query = {officeID : {$eq : o_id}};
        employees = await client.db("social_app").collection("employee").find({"officeID" : o_id}).toArray();

        return employees;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
getAllEmployeesInOfficeOnDate().catch(console.error);

module.exports = {getAllEmployees, getAllEmployeesInOfficeOnDate}