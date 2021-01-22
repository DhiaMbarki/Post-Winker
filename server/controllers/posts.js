import express from 'express';
import mongoose from 'mongoose';

// to keep our work more clean and easy we past all the routes in the post of controllers
import PostMessage from '../models/postMessage.js'


export const getPosts = async (req, res) => { //return empty array from the Schema
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {

        res.status(404).json({ message: error.message});

    }

    
    

}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post)

   try {
       await newPost.save();
    //    https://restfulapi.net/http-status-codes/ to have a more look at requests 

       res.status(201).json(newPost);

   } catch (error) {
        res.status(409).json({ message: error.message});
   }
}


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true});
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}










