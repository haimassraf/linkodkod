import express from 'express';
import { getAllPosts, getPostById, createPost, updateById, deleteById } from '../controllers/posts.controller.js';

const postsRouter = express.Router();

postsRouter.get('/:id', getPostById)
postsRouter.get('/', getAllPosts)
postsRouter.post('/', createPost)
postsRouter.put('/:id', updateById)
postsRouter.delete('/:id', deleteById)

export default postsRouter