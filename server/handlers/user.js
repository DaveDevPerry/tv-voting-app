const db = require('../models');

exports.showUsers = async (req, res, next) => {
  console.log('user handler');
  try {
    const users = await db.User.find();
    // const users = await db.User.find().populate('user', ['username', 'id']);
    console.log('show users / handlers ');
    return res.status(200).json(users);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await db.User.findById(id);
    // const user = await db.User.findById(id).populate('user', [
    //   'username',
    //   'id',
    // ]);
    // .populate('voted', ['username', 'id']);
    if (!user) throw new Error('No user found');

    return res.status(200).json(user);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};
