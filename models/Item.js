const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  title: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateCreated: Date,
  lastUpdated: Date,
});

mongoose.model('items', itemSchema);
