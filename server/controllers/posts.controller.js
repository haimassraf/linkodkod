import { getAll } from '../services/posts.service.js';

export async function getAllPosts(req, res) {
    const allPosts = await getAll()
    res.send(allPosts);
}

export async function getPostById(req, res) {
    try {
        const id = +req.params.id;
        if (!id) throw new Error(`You mest enter an Realy ID Number`)
        const allPosts = await getAll()
        const wantedPost = allPosts.filter((post) => post.id === id)
        if (!wantedPost.length) throw new Error(`Post With ID '${id}' Not Found`)
        res.send(wantedPost[0])
    } catch (err) {
        res.send(err.message)
    }
}