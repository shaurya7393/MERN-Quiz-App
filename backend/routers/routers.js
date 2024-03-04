const express = require('express');
const { getQuestions, insertQuestions,deleteQuestions,getResult,postResult,deleteResult,userRegister, userLogin} = require('../controllers/controllers');
const router = express.Router()


router.route('/signup').post(userRegister);
router.route('/login').post(userLogin);

router.route("/questions")
   .get(getQuestions)
    .post(insertQuestions)
    .delete(deleteQuestions)


router.route("/result")
    .get(getResult)
    .post(postResult)
    .delete(deleteResult)

module.exports = router