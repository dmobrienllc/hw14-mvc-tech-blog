const router = require('express').Router();
const { Comment, Post, PostComment, UserComment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({ include: { all: true } })
    res.json(commentData);
  }
  catch (err) {
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, { include: { all: true } })
    res.json(commentData);
  }
  catch (err) {
    res.json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    })
  }
  catch (err) {
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  try {

    req.session.user_id = req.body.user_id;
    const newComment = await Comment.create(req.body);
    await PostComment.create({ post_id: req.body.post_id, comment_id: newComment.id });
    await UserComment.create({ user_id: req.session.user_id, comment_id: newComment.id });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
