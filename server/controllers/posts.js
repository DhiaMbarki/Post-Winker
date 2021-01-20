// to keep our work more clean and easy we past all the routes in the post of controllers
import PostMessage from '../models/postMessage.js'


export const getPosts = async (req, res) => { //return empty array from the sckema
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {

        res.status(404).json({ message: error.message});

    }

}

export const createPost = (req, res) => {
    res.send('Post Creation')
}