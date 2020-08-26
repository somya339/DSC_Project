const router = require('express').Router();
const controller = require('../controllers/controller');
const mongo = require('mongodb');
router.get("/", () => {})
router.get("/signup", controller.getSignup);

router.use("/login", () => {

})
router.post("/signup", controller.postSignup);
router.post("/login", () => {

})
module.exports = router;