const express = require('express');
const router = require('express').Router()
const User = require('../models/users');
router.use(express.json());



router.get('/users', (req, res) => {
    User.find().then((result) => {
        console.log("Fetched Records are ", result);
        res.status(200).send(result);
    }).catch((err) => console.log(err))
})
router.get('/users/:_id', (req, res) => { 
    User.findById(req.params._id).then((result) => {
        console.log("Fetched Records are ", result);
        res.status(200).send(result);
    }).catch((err) => console.log(err))
})
router.post('/users', function (req, res) {
    // res.send("Hello api will be here");
    const data = new User(req.body)
    data.save().then((result) => {
        console.log('Records are inserted successfully' + result);
        res.status(201).json(result);
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err);
    })
})

router.put('/users/:id',((req,res)=>{
    
    
    User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then((result)=>{
        console.log('Records are updated',result);
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err)
        res.status(400).json(err);
    })
})
)
// router.post('/users', function (req, res) {
    //     // res.send("Hello api will be here");
    //     // const data = new User(req.body)
//     User.insertMany([{


//         "name": "Sahil naqvi",
//         "email": "sahil@test.com",
//         "active": false,
//         "age": 20
//     }, {


//         "name": "Yash Chawla",
//         "email": "yash@test.com",
//         "active": false,
//         "age": 21
//     }, {


//         "name": "Vishal Solanki",
//         "email": "vishal@test.com",
//         "active": false,
//         "age": 19
//     }]).then((result) => {
//         console.log('Records are inserted successfully' + result);
//         res.status(201).json(result);
//     })
//     .catch((err) => {
//         console.log(err)
//         res.status(400).json(err);
//     })
// })
// router.post('/users',  async (req, res)=> {
//     // res.send("Hello api will be here");
//     try {
//         const data = new User(req.body)
//         const studentData=await data.save();
//         console.log("DAta are inserted successfully"+studentData);
//         res.status(200).json(studentData);
//     } catch (err) {
//         console.log(err)
//         res.status(400).json(err);
//     }
    
//     })
        
// router.put('/users',((req,res)=>{
//     User.updateOne({name:"Sahil naqvi"},{active:true}).then((result)=>{
//         console.log(result);
//         res.status(200).json(result);
//     }).catch((err)=>{
//         console.log(err)
//         res.status(400).json(err);
//     })
// })
// )
// router.put('/users/:_id',function (req,res) {
//     const _id=req.params._id;
//     console.log('Put method is called here')
//     User.findByIdAndUpdate(_id,req.body,{new:true}).then((result)=>{
//         console.log("Records are updated:"+result);
//         res.status(200).json(result);
//     }).catch((err)=>{
//         console.log(err)
//         res.status(400).json(err);
//     })
// })

router.delete('/users/:_id', function (req, res) {
    User.findByIdAndDelete({ _id: req.params._id }).then((result) => {
        console.log('Records are deleted successfully'+result)
        res.status(200).json(result);
    }).catch((err) => { console.log(err) })
})
module.exports  = router
