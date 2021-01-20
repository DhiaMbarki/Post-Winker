import express from 'express';
import {getPosts, createPost,} from '../controllers/posts.js';
const router = express.Router()

//you will get all the routes on controllers / posts.js :) 
router.get('/', getPosts);
router.post('/', createPost);

export default router;