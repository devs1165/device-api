const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    data:{ 
        // type:String, 
        // required:true
    },
    timestamp:{
        type:Date,
    }

})
module.exports = mongoose.model('Data',dataSchema);

