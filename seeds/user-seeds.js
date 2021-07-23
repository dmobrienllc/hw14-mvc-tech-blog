const { User } = require('../models');

const userData = [
  {
    user_name: 'dmobrien',
    email: 'dmobrienllc@gmail.com',
    password: 'Gogoxml384!!'
  },
  {
    user_name: 'sadiedup',
    email: 'sadiedupuis@gmail.com',
    password: 'IEffingHateIndoorSoccer1!'
  },
  {
    user_name: 'pjharvey123',
    email: 'pjharv@gmail.com',
    password: 'meJane1234!'
  },
];

const seedUsers = () => User.bulkCreate(userData,
                {validate: true,individualHooks: true});

module.exports = seedUsers;

