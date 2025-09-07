import express from 'express'
import postsRouter from './routes/posts.route.js';
import cors from 'cors'
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors('*'))
app.use('/posts', postsRouter)

app.listen(PORT, () => console.log(`Server Listening on 'http://localhost:${PORT}'`))