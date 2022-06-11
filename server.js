const Express = require('express');

const app = new Express();

app.use(Express.static('static')).listen(5000, () => {
    console.log('server listens on port 5000');
});