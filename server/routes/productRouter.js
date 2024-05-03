const express = require('express')
const router = express.Router()

const Product= require('../models/productModel')

router.get('/products', async (req, res) =>{
    try{
        const products = await Product.find()
        res.status(200).send({data: products})
    }catch(err){
        res.status(400).send({error :err})
    }

})
router.post('/create-products', async (req, res) => {
    try {
        const { name, adjective, description, price, category } = req.body;
        const newProduct = new Product({ name, adjective, description, price, category });
        await newProduct.save();
        res.status(201).send({ data: newProduct });
    } catch (err) {
        res.status(400).send({ error: err });
    }
});
router.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, adjective, description, price, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, adjective, description, price, category }, { new: true });
        res.status(200).send({ data: updatedProduct });
    } catch (err) {
        res.status(400).send({ error: err });
    }
});

// DELETE a product
router.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).send({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(400).send({ error: err });
    }
});
router.get('/products-by-categories', async (req,res)=>{
    try{
        const products = await Product.aggregate([
            { $match:{} },
            { $group: {
                _id:'$category',
                products: {$push:'$$ROOT'},
            }},
            { $project: {name:'$_id', products: 1, _id:0}}
        ])
        res.status(200).send({data: products})
    }catch(err){
        res.status(400).send({error: err})
    }
})

module.exports = router