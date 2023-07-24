import express from 'express';
import { nanoid } from 'nanoid'
let router = express.Router()
// not recommended at all - server should be stateless
let posts = [
    {
        id: nanoid(),
        title: "ExpressCrudApp By Usman",
        text: "in this app we can post put delete get etc",
    }
]
// POST //create   /api/v1/post
router.post('/post', (req, res, next) => {
    console.log('This is create post request', new Date());

    if (
        !req.body.title
        || !req.body.text
    ) {
        res.status(403);
        res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);
        return;
    }

    posts.push({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text,
    })

    res.send('Post created');
})
// GET     /api/v1/posts/:userId
router.get('/posts', (req, res, next) => {
    console.log('this is posts v1', new Date());
    res.send('this is posts v1');
})
// GET     /api/v1/post/:userId/:postId
router.get('/post/:postId', (req, res, next) => {
    console.log('this is specific post request v1', new Date());
    res.send('this is created post v1');
})
// PUT     /api/v1/post/:userId/:postId
router.put('/post/update/:postId', (req, res, next) => {
    console.log('this is post v1', new Date());
    res.send('this is post v1');
})
// DELETE  /api/v1/post/:userId/:postId
router.delete('/post/delete/:postId', (req, res, next) => {
    console.log('this is delete post v1', new Date());
    res.send('this is delete post v1');
})

export default router