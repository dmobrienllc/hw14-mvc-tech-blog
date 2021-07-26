const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Duplicated from code above, forgot syntax for wildcarding
//this route so it dupes the / above.
router.get('/homepage', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts/:id', withAuth,async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, { include: { all: true } });

        const post = postData.get({ plain: true });

        res.render('post-detail', {
          post,
          logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: {all:true},
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});

router.get('/logout', (req, res) => {
if (req.session.logged_in) {
    req.session.destroy(async () => {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: false
        });
        return;
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
