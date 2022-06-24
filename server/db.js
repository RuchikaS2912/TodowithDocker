const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://admin:admin@todocluster.b8igd.mongodb.net/test';

mongoose.connect(mongoURL, { useUnifiedtopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on('connected', () => {
  console.log('MongoDB connection successful');
});

db.on('error', () => {
  console.log('MongoDB connection failed');
});

module.exports = mongoose;
