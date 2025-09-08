import { readFile, writeFile } from 'node:fs/promises'

export async function getAll() {
    try {
        const file = await readFile("DB/posts.json", 'utf-8');
        if (!file) {
            return []
        }
        const posts = JSON.parse(file)
        return posts;
    } catch (error) {
        return error.message
    }
}

export async function insertOne(body) {
    try {
        const allPosts = await getAll();
        allPosts.unshift(body)
        await writeFile("DB/posts.json", JSON.stringify(allPosts))
    } catch (error) {
        return error.message
    }
}
