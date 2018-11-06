const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('items');

module.exports = app => {
  app.post('/api/items', requireLogin, (req, res) => {
    const { title } = req.body;
    const item = new Item({
      title,
      _user: req.user.id,
      dateCreated: Date.now(),
      lastUpdated: Date.now(),
    });
  });
};
