const Express = require('express');

const app = new Express();

app.use(Express.json());

const userDB = {};
const userResponse = {};

app.post('/enroll', (req, res) => {
    userDB.userName = req.body.userName;
    userDB.userSurname = req.body.userSurname;

    userResponse.message = `New user ${userDB.userName} is created`;

    res.json(userResponse);
});

app.use(Express.static('static')).listen(5000, () => {
    console.log('server listens on port 5000');
});
