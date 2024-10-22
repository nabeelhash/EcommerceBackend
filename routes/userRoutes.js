const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const authenticate = require('../middleware/authenticate')
const {adminRole} = require('../middleware/Role')

const upload = require('../middleware/multer')

//allusers
router.get('/allUsers',authenticate,async function(req,res){
    try{
        const allUsers =await User.find()
        res.status(200).json(allUsers)
    }
    catch(error){
        return res.status(400).json(error)
    }
})


//singleuser
router.get('/single/:id',async function(req,res){
    try{
        const single =await User.findById(req.params.id)
        res.status(200).json(single)
    }
    catch(error){
        return res.status(400).json(error)
    }
})

//currentUser
router.get('/current',authenticate,async function(req,res){
    try{
        const single =await User.findById(req.userId)
        res.status(200).json(single)
    }
    catch(error){
        return res.status(400).json(error)
    }
})

//delete
router.delete('/deleteUser/:id',authenticate,async function(req,res){
    try{
        const deleteUser =await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)
    }
    catch(error){
        return res.status(400).json(error)
    }
})


//update
router.patch('/updateAvatar',authenticate,upload.single('pic'),async function(req,res){
    try{
        if(!req.file){
            return res.status(400).json('Img not found')
        }
        const updatePic =await User.findByIdAndUpdate(
            req.userId,
            {avatar: req.file.path},
            {new: true})
        res.status(200).json(updatePic)
    }
    catch(error){
        return res.status(400).json(error)
    }
})



module.exports= router