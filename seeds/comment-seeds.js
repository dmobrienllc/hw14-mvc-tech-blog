const { Comment } = require('../models');

const commentData = [
  {
    comment_body: 'Right on man!',
  },
  {
    comment_body: 'Right on man!',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedComments = () => Comment.bulkCreate(tagData);

module.exports = seedComments;
