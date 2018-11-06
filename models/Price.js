const mongoose = require('mongoose');

const { Schema } = mongoose;

const priceSchema = new Schema({
  title: String,
  _item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
  storeName: String,
  unitsQty: Number,
  unitsName: String,
  discountPct: {
    type: Number,
    default: 0,
  },
  discountAmt: {
    type: Number,
    default: 0,
  },
});

mongoose.model('prices', priceSchema);
