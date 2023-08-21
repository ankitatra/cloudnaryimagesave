const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true
    },
   id_proof : {
    type:Object,
    require:true
   },
},
    {
    versionKey : false,
    timestamps : true
    
});

const User = mongoose.model("Owner",userSchema);
module.exports = {
   User
}