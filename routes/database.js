var express = require('express');
var router = express.Router();
var firebase = require("firebase")

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
firebase.initializeApp(config);

/* GET home page. */
router.get('/members/all', function(req, res, next) {
  
});

module.exports = router;
