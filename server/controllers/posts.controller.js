import { getAll, insertOne, insertAll } from '../services/posts.service.js';

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

export async function createPost(req, res) {
    try {
        const body = req.body;
        if (!body.image || !body.description || !body.poster) {
            throw new Error("new object has missing values");
        }
        const allPosts = await getAll();
        if (allPosts.length !== 0) {
            const newId = allPosts[0].id + 1
            body.id = newId;
        }
        else {
            body.id = 1;
        }
        console.log("image: ", body.image)
        const imageName = body.image.split("\\");
        const image = imageName[imageName.length - 1]
        body.image = `http://localhost:3000/${image}`
        body.likes = 0;
        body.date = new Date().toLocaleString()
        insertOne(body)
        res.send(body)
    } catch (err) {
        res.send(err.message)
    }
}

export async function updateById(req, res) {
    try {
        const body = req.body;
        const id = +req.params.id;
        if (!id) throw new Error(`You mest enter an Realy ID Number`)
        const allPosts = await getAll()
        const iToUpdate = allPosts.findIndex((post) => post.id === id)
        if (iToUpdate === -1) throw new Error(`Post With ID '${id}' Not Found`)
        allPosts[iToUpdate].image = body.image || allPosts[iToUpdate].image;
        allPosts[iToUpdate].description = body.description || allPosts[iToUpdate].description
        allPosts[iToUpdate].poster = body.poster || allPosts[iToUpdate].poster
        await insertAll(allPosts);
        res.send(allPosts[iToUpdate])
    } catch (error) {
        res.send(error.message)
    }
}

export async function deleteById(req, res) {
    try {
        const id = +req.params.id;
        if (!id) throw new Error(`You mest enter an Realy ID Number`)
        const allPosts = await getAll()
        const iToUpdate = allPosts.findIndex((post) => post.id === id)
        if (iToUpdate === -1) throw new Error(`Post With ID '${id}' Not Found`)
        const deletedUser = allPosts[iToUpdate]
        allPosts.splice(iToUpdate, 1);
        await insertAll(allPosts);
        res.send(deletedUser);
    } catch (error) {
        res.send(error.message)
    }
}