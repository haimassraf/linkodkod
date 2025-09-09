import assert from "node:assert";
import test, { describe } from "node:test";
import { getAll, insertOne } from "../services/posts.service.js";
import dotenv from 'dotenv';

dotenv.config();

const body = {
    poster: "--- for testing ---",
    description: "--- for testing ---",
    image: "--- for testing ---"
}

describe("posts tests", () => {
    test("get all posts tests", async () => {
        assert.strictEqual(typeof await getAll(), typeof []);
        assert.ok(Array.isArray(await getAll()));
    }),
        test("insert one post tests", async () => {
            assert.strictEqual(typeof await insertOne(body), typeof []);
        })
})