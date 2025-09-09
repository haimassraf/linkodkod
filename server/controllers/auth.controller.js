import * as ser from '../services/auth.service.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies?.token;
        if (token) {
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.userId = payload.id;
            next();
        } else {
            return res.status(403).send("You must logged in first");
        }
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            res.clearCookie("token");
            res.status(401).send("Auto Logout. Please login again.");
        } else { res.status(500).send(err.message) }
    };
};


export async function login(req, res) {
    try {
        res.clearCookie("token");
        const { name, password } = req.body;
        if (!name || !password) return res.status(403).send("Enter name and password");
        const allUser = await ser.getAllUsers();
        let user = allUser.filter((user) => user.name === name)
        if (user.length === 0) return res.status(403).send("Wrong userName or password");
        user = user[0]
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) return res.status(403).send("Wrong userName or password");
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '5m' });
        res.cookie("token", token, { httpOnly: true, sameSite: true });
        res.json({ user, token });
    }
    catch (err) { res.status(500).send(err.message) };
}

export async function signup(req, res) {
    try {
        res.clearCookie("token");
        const { name, password } = req.body;
        if (!name || !password) return res.status(403).send("Enter name and password");
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = { name: name, password: hashPassword };
        const allUsers = await ser.getAllUsers();
        if (allUsers.length !== 0) {
            const newId = allUsers[0].id + 1
            newUser.id = newId;
        }
        else {
            newUser.id = 1;
        }
        const isNameExist = allUsers.filter((user) => (user.name === name))
        if (isNameExist.length > 0) return res.status(403).send("The UserName already exist")
        await ser.insertOneUser(newUser);
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_KEY, { expiresIn: '5m' });
        res.cookie("token", token, { httpOnly: true, sameSite: true });
        res.send({ newUser, token });
    } catch (err) { res.status(500).send(err.message) };
}

export async function logout(req, res) {
    res.clearCookie("token");
    res.send("Logout succesfully");
}
