const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel')
const User = require('../models/userModel')
const authenticate = require('../middleware/authenticate')
const {adminRole} = require('../middleware/Role')

const  upload  = require('../middleware/multer')


//create order
router.post('/category',authenticate,async function(req,res){
    try{
        const checkCategory = await Category.findOne({name: req.body.name})
        if(checkCategory){
            return res.status(400).json('Category already exists')
        }
        const createCategory= await Category.create({name: req.body.name})
        res.status(200).json(createCategory)
    }
    catch(error){
        return res.status(500).json({ error: error.message })
    }
})



//get specific order
router.get('/categoryAll',authenticate,async function(req,res){
    try{
        const allCategories = await Category.find()
        res.status(200).json(allCategories)
    }
    catch(error){
        return res.status(500).json({ error: error.message })

    }
})


//get single specific order
router.get('/singleCategory/:id',authenticate,async function(req,res){
    try{
        const singlecategory = await Category.findById(req.params.id)
        res.status(200).json(singlecategory)
    }
    catch(error){
        return res.status(500).json({ error: error.message })

    }
})


//update specific order
router.patch('/updateCategory/:id',authenticate,async function(req,res){
    try{
        const allCategories = await Category.findByIdAndUpdate(req.params.id,{name: req.body.name},{new: true})
        res.status(200).json(allCategories)
    }
    catch(error){
        return res.status(500).json({ error: error.message })

    }
})

//delete specific order
router.delete('/deleteCategory/:id',authenticate,async function(req,res){
    try{
        const allCategories = await Category.findByIdAndDelete(req.params.id)
        res.status(200).json(allCategories)
    }
    catch(error){
        return res.status(500).json({ error: error.message })

    }
})


module.exports = router