var express = require('express');
const { Db } = require('mongodb');
var router = express.Router();

/* GET all offices data */
router.get('/', function(req, res, next) {
    db.collections("office").find().toArray().then(
        results => {
            console.log("GET request successful, here are the offices found:")
            console.log(results)
            console.log("sending results to recipient...")
            res.send(results);
        }).catch(error => {
            console.error(error)
        })
});

/*GET all offices names */
router.get('/names',function(req,res,next){
    db.collections("office").find({},{officeName:1, officeCapacity:0, peopleInOffice:0}).toArray().then(
        results => {
            console.log("GET request successful, here is a list of currently supported offices:");
            console.log(results);
            console.log("sending offices to recipient...");
            res.send(results);

        }).catch(error =>{
            console.error(error);
        })
})

module.exports = router;