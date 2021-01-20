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