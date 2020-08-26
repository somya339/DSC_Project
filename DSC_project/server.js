const express = require('express');
const app = require('express')();
const path = require('path');
const mongo = require('./utils/database');
const router = require('./router/router');
const body = require('body-parser');
app.use(body.urlencoded({
    extended : false
}))
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "views");
app.set("view engine", "ejs");
app.use("/", router);
mongo.connect(() => {
    app.listen(process.env.PORT || 3400, () => {
        console.log("the server is running at port 3400");
    })
});