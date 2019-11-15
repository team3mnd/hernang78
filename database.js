const mongoose = require('mongoose');

const uri = "mongodb+srv://user1:" + process.env.MONGO_ATLAS_PW + "@mytinerarycluster-zsbch.mongodb.net/mytinerary?retryWrites=true&w=majority";
const db = mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

module.exports = db;