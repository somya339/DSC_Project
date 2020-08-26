const database = require('../utils/database').getdb;

class signup {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    save() {
        let db = database();
        db.collection("DSC_Test_base").insertOne(this).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err);
        });
    }
    static fetch(email){
       db.collection("DSC_test_base").findOne({email:email}).then((result) => {
           console.log(result)
       }).catch((err) => {
           console.log(err);
       }); 
    }
};

module.exports = signup;