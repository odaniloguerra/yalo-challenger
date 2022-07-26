const express = require("express")
const { listUsers, listPosts, getComments } = require("./services/posts.service")
const app = express()
const port = 3000

app.get('/posts', (req, res) => {
    const { start, size } = req.query;
    const posts = listPosts(start, size);
    const users = listUsers();



})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})