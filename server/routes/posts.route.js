import express from 'express';
import { getAllPosts, getPostById, createPost } from '../controllers/posts.controller.js';

const postsRouter = express.Router();

postsRouter.get('/:id', getPostById)
postsRouter.get('/', getAllPosts)
postsRouter.post('/', createPost)

export default postsRouter