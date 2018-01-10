var mongoose = require('mongoose');
mongoose.connect('mongodb://peter:peter@ds123722.mlab.com:23722/bctc', { useMongoClient: true });
mongoose.Promise = global.Promise;


var User = mongoose.model('users', { name: String, email: String, password: String });

module.exports = User