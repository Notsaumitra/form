const express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/',(req,res)=>{
    User.find((err,data)=>{
        if(!err) {res.send(data);}
    });
});


router.post('/',async(req,res)=>{
    try{
    let user1 = new User(req.body);
    const createUser= await user1.save();
    res.send(createUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        console.log(req.params.id);
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.send(deleteUser);
    }catch(err){
        res.send(err);
    }
})

module.exports=router;