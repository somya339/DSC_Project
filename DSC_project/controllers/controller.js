const signup = require('../model/model');

exports.getlogin = (req, res) => {
    res.render("")
}

exports.getSignup = (req, res) => {
        res.render("index", {
            existed : req.locals.existed?req.locals.existed:""
        });
}
exports.postSignup = (req,res)=>{
    signup.fetch(req.body.email).then((result) => {
        if(!result){
            const model = new signup(req.body.username,req.body.email,req.body.password);
            model.save();
            res.redirect("/login");
        }
        else{
            req.locals.existed = true;
            res.redirect("/signup");
        }
    }).catch((err) => {
        console.log(err);
    });
}