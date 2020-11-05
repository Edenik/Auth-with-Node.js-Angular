const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authUsers', {useUnifiedTopology:true, useNewUrlParser:true});