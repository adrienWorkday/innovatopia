var database = require('./database')

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

    try {
        await client.connect();
        const query = {officeID : {$eq : testID}};
        employees = await client.db("social_app").collection("employee").find(query).toArray();

        return employees;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}
getAllEmployeesInOfficeOnDate().catch(console.error);

module.exports = {getAllEmployees}