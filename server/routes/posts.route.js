import express from 'express';
import { getAllPosts, getPostById } from '../controllers/posts.controller.js';

const postsRouter = express.Router();


postsRouter.get('/:id', getPostById)
postsRouter.get('/', getAllPosts)

export default postsRouter