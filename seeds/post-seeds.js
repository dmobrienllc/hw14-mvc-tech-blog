const { Post } = require('../models');

const postData = [
  {
    post_title: 'Sequelize',
    post_body: 'I am really loving Sequelize; so much power and so easy to use.',
    user_id: 1
  },
  {
    post_title: 'React Is Awesome',
    post_body: 'React is the best technology going right now; prove me wrong!',
    user_id: 1
  },
  {
    post_title: 'C# is the best',
    post_body: 'Who here wishes javascript was more like C#?',
    user_id: 2
  },
  {
    post_title: 'I do not like Handlebars',
    post_body: 'Handlebars feels really clunky to use; I am going React all the way.',
    user_id: 2
  },
  {
    post_title: 'I love front end dev!',
    post_body: 'Not a big fan of server-side development; front end all the way for me!',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
