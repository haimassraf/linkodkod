import { readFile } from 'node:fs/promises'

export async function getAll() {
    try {
        const file = await readFile("DB/posts.json", 'utf-8');
        const posts = JSON.parse(file)
        return posts;
    } catch (error) {
        return error.message
    }
}