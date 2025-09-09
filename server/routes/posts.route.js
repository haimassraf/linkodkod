import express from 'express';
import { getAllPosts, getPostById, createPost, updateById, deleteById } from '../controllers/posts.controller.js';
import { authMiddleware } from '../controllers/auth.controller.js';

const postsRouter = express.Router();

postsRouter.get('/:id', authMiddleware, getPostById)
postsRouter.get('/', authMiddleware, getAllPosts)
postsRouter.post('/', authMiddleware, createPost)
postsRouter.put('/:id', authMiddleware, updateById)
postsRouter.delete('/:id', authMiddleware, deleteById)

export default postsRouter