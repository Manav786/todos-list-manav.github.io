// It is a model we define the structure of the collection inside the model when we insert or retrive the data it can be of which type ? for eg: name:String here name is a type of String here.
const mongos=require('mongoose');
require('../db/conn')
let userSchema=new mongos.Schema({
   
    title:{
        
        type: String,
        required: true,
        unique: true,
        maxlength: 20
    
    },
    description:{
        type: String,
        required: true,
        maxlength: 60
    },
    lastdate:String,
    status:{
        type: String,
        required: true,
        enum: ['In Progress','Completed','Todo']
    }
},{ collection : 'users' })
var user_details=mongos.model('user_details',userSchema)
module.exports=user_details;

