import { getAll, insertOne } from '../services/posts.service.js';

export async function getAllPosts(req, res) {
    const allPosts = await getAll()
    res.send(allPosts);
}

export async function getPostById(req, res) {
    const id = +req.params.id;
    if (!id) throw new Error(`You mest enter an Realy ID Number`)
    const allPosts = await getAll()
    const wantedPost = allPosts.filter((post) => post.id === id)
    if (!wantedPost.length) throw new Error(`Post With ID '${id}' Not Found`)
    res.send(wantedPost[0])
}

export async function createPost(req, res) {
    try {
        const body = req.body;
        if (!body.image || !body.description || !body.poster) {
            throw new Error("new object has missing values");
        }
        const allPosts = await getAll();
        if (allPosts.length !== 0) {
            const newId = allPosts[allPosts.length - 1].id + 1
            body.id = newId;
        }
        else {
            body.id = 1;
        }
        body.likes = 0;
        body.date = new Date().toLocaleString()
        insertOne(body)
        res.send(body)
    } catch (err) {
        res.send(err.message)
    }
}