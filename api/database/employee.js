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
    var o_id = new ObjectId(officeID);


    try {
        await client.connect();
        const query = {
            officeID : {$eq : o_id}, 
            datesInOffice : { $elemMatch : { $eq : new Date(date)}}
        };
        employees = await client.db("social_app").collection("employee").find(query).toArray();

        return employees;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
getAllEmployeesInOfficeOnDate().catch(console.error);

module.exports = {getAllEmployees, getAllEmployeesInOfficeOnDate}