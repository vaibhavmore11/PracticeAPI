const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all back post
router.get('/', async (req, res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err });
    }
});

//sumbit a post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

   try{
       const savedPost = await post.save();
       res.json(savedPost);
        }catch(err){
        res.json({ message: err });
        }

});

//get a specific post
router.get('/:postId', async (req, res) => {
    try{
    const specificpost = await Post.findById(req.params.postId);
    res.json(specificpost);
    }catch(err){
        res.json({ message: err });
    }
});

//delete the specific post
router.delete('/:postId', async (req, res) => {
    try{
    const removedPost = await Post.remove({_id:req.params.postId});
    res.json(removedPost);
    }catch(err){
        res.json({ message: err });
    }
});

//update a post
router.patch('/:postId', async (req, res) => {
    try{
    const updatedpost = await Post.updateOne(
        {_id:req.params.postId}, 
        {$set: {title: req.body.title} }
        );
    res.json(updatedpost);
    }catch(err){
        res.json({ message: err });
    }
})

module.exports = router;