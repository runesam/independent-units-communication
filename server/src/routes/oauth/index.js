const { app } = require('../../expressSetup');
const login = require('./login');

app.post('/oauth/token', (req, res) => login(req, res));
