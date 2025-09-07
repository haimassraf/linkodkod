import express from 'express'

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/home', (req, res) => {
    res.send("hi from GET /home")
})

app.listen(PORT, () => console.log(`Server Listening on 'http://localhost:${PORT}'`))