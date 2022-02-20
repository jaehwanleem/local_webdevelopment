const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(express.static(__dirname + '/public'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/:id', (req, res) => { //can be a home dir
    req.query
    console.log(req.query);
    req.body
    console.log(req.body);
    req.headers
    console.log(req.headers);
    req.params
    console.log(req.params) // /:id 를 가져온다 ex) localhost:3000/1234 이면 1234 를 가져온다 
    const home = "wellcome to homepage"
    res.status(404).send("not found");
})


app.get('/profile', (req, res) => {
    res.send("getting profile")
})



app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'Jenny',
        age: 'tennis'
    }
    res.send(user);

}) //'/' => rootpath (req,res) => 리퀘스트 리스폰스 
app.listen(3000);

