const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const hospitalSchema=new Schema({
    name:{
        type: String,
        required: true,
    },
    address:{
        type:String,
        required:true,
    },
    empanneled:{
        type:String,
        required:true,
    },
    person:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("Hospital",hospitalSchema);