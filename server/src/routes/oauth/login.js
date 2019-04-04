const bcrypt = require('bcrypt');

const { users } = require('../../db');
const jwt = require('./jwt');

const findUser = username => Promise.resolve(users.find(user => user.username === username));

const verifyPassword = (password, user) => bcrypt
    .compare(password, user.password)
    .then((res) => {
        if (res) return user;
        throw new Error();
    })
    .catch(() => {
        throw new Error('wrongPassword');
    });

const login = (req, res) => {
    const { username, password } = req.body;
    return findUser(username)
        .then(user => verifyPassword(password, user))
        .then((user) => {
            const token = jwt.sign({ user });
            return res.status(200).send({
                token,
                id: user.id,
                username: user.username,
            });
        })
        .catch((error) => {
            if (error.message === 'wrongPassword') return res.sendStatus(400);
            return res.status(404).send(error.message);
        });
};

module.exports = login;
