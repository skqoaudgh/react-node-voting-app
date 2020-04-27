const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
