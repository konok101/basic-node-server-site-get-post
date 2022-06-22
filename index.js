const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('rrr can code node now');
});

const users = [
    { id: 1, name: 'Sabana1', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabana2', email: 'sabana@gmail.com' },
    { id: 3, name: 'Sabana3', email: 'sabana@gmail.com' },
    { id: 4, name: 'Sabana4', email: 'sabana@gmail.com' },
    { id: 5, name: 'Sabana5', email: 'sabana@gmail.com' },
]

app.get('/user', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);

});

/* input user to post part----------------------- */
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple']);
});
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('fazlee falaver');
})

app.listen(port, () => {
    console.log('lisiting to port', port);
})