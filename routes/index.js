var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://peter:peter@ds123722.mlab.com:23722/bctc', { useMongoClient: true });
mongoose.Promise = global.Promise;
var User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  
  var newUser = new User({ name: 'peter', email: "peter@bctc.io", password: "123" });
  newUser.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
  res.render('index', { title: 'Express' });
});

router.get('/find', (req, res)=> {
  User.find({}, (err, doc) => {
    res.json(doc)
  })
})

router.get('/findOne', (req, res) => {
  User.findOne({name: 'peter'}, (err, doc) => {
    res.json(doc)
  })
})

router.post('/login', (req, res) => {
  console.log(req.body)
  User.findOne({
    email: req.body.email
  }, (err, doc) => {
    if (err) {
      console.log(err)
    } 
    if (!doc) {
      console.log('not found')
    }
    console.log(doc)
    if (doc.password !== req.body.password) {
      res.json({
        success: false,
        message: "wrong password"
      })
    } else {
      res.json({
        success: true,
        message: "logged in"
      })
    }
  })
})
module.exports = router;
