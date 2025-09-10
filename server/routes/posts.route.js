import express from 'express';
import { getAllPosts, getPostById, createPost, updateById, deleteById } from '../controllers/posts.controller.js';
import { authMiddleware } from '../controllers/auth.controller.js';
import fileUpload from 'express-fileupload';

const postsRouter = express.Router();

postsRouter.use(authMiddleware)

postsRouter.get('/:id', getPostById)
postsRouter.get('/', getAllPosts)
postsRouter.post('/', fileUpload(), createPost)
postsRouter.put('/:id', fileUpload(), updateById)
postsRouter.delete('/:id', deleteById)

export default postsRouter