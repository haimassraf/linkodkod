import assert from "node:assert";
import test, { describe } from "node:test";
import { getAllUsers, insertOneUser } from "../services/auth.service.js";
import dotenv from 'dotenv';

dotenv.config();

const body = {
    name: "--- for testing ---",
    password: "--- for testing ---"
}

describe("posts tests", () => {
    test("get all posts tests", async () => {
        assert.strictEqual(typeof await getAllUsers(), typeof []);
        assert.ok(Array.isArray(await getAllUsers()));
    }),
        test("insert one post tests", async () => {
            assert.strictEqual(typeof await insertOneUser(body), typeof []);
        })
})