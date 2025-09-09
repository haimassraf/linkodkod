import { readFile, writeFile } from 'node:fs/promises'

export async function getAllUsers() {
    try {
        const file = await readFile("DB/users.json", 'utf-8');
        if (!file) {
            return []
        }
        const posts = JSON.parse(file)
        return posts;
    } catch (error) {
        return error.message
    }
}

export async function insertOneUser(body) {
    try {
        const allUsers = await getAllUsers();
        allUsers.unshift(body)
        await writeFile("DB/users.json", JSON.stringify(allUsers))
    } catch (error) {
        return error.message
    }
}

export async function insertAll(data) {
    try {
        await writeFile("DB/posts.json", JSON.stringify(data))
    } catch (error) {
        return error.message
    }
}