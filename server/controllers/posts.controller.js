import { readFile } from 'node:fs/promises'

export async function getAllPosts(req, res) {
    try {
        const file = await readFile("DB/posts.json", 'utf-8')
        const posts = JSON.parse(file)
        res.send(posts);
    }
    catch (err) { res.send(err.message) }
}

export async function getPostById(req, res) {
    try {
        const id = +req.params.id;
        if (!id) throw new Error(`You mest enter an Realy ID Number`)
        const file = await readFile("DB/posts.json", 'utf-8')
        const posts = JSON.parse(file)
        const wantedPost = posts.filter((post) => post.id === id)
        if (!wantedPost.length) throw new Error(`Post With ID '${id}' Not Found`)
        res.send(wantedPost[0])
    } catch (err) {
        res.send(err.message)
    }
}