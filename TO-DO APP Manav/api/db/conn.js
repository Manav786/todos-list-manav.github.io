const mongo = require('mongoose');
require('../models/users')
mongo.connect('mongodb+srv://avenger:avenger@cluster0.jybtp.mongodb.net/manav?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>console.log("Connected")).catch((err)=>console.log(err))
module.exports=mongo;