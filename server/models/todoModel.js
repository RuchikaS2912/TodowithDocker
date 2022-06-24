const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: { type: String, require },
  completion: { type: String, require },
});

const todomodel = mongoose.model('todo', todoSchema);
module.exports = todomodel;
