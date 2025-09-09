import express from 'express'
import postsRouter from './routes/posts.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
app.use(express.static('images'))
app.use(cookieParser());

app.use('/posts', postsRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => console.log(`Server Listening on 'http://localhost:${PORT}'`))