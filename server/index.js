const express = require('express');
const bodyParser = require('body-parser');
// const controller = require('./controllers/messages_controller');
const mc = require(__dirname + '/controllers/messages_controller');

const port = 3000
const app = express()

const messagesBaseUrl = "/api/messages";

app.use(bodyParser.json());
app.use( express.static(__dirname + '/../public/build' ) );

app.post(`${messagesBaseUrl}`, mc.create );
app.get(`${messagesBaseUrl}`,mc.read);
app.put (`${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete);














app.listen(port, () => console.log(`My power levels are over ${port}`))