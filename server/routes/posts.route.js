import express from 'express';
import { getAllPosts, getPostById, createPost, updateById, deleteById } from '../controllers/posts.controller.js';
import { authMiddleware } from '../controllers/auth.controller.js';
import expressFileUpload from 'express-fileupload'
import fileUpload from 'express-fileupload';

const postsRouter = express.Router();

postsRouter.use(fileUpload())

postsRouter.get('/:id', authMiddleware, getPostById)
postsRouter.get('/', authMiddleware, getAllPosts)
postsRouter.post('/', authMiddleware, createPost)
postsRouter.put('/:id', authMiddleware, updateById)
postsRouter.delete('/:id', authMiddleware, deleteById)

export default postsRouter