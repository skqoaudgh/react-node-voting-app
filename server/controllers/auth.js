const db = require('../models');

exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    const { id, username } = user;
    res.status(201).json({ id, username });
  } catch (err) {
    if (err.code === 11000) {
      err.message = 'the username is already existed';
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ username: req.body.username });
    const { id, username } = user;
    const valid = await user.comparePassword(req.body.password);

    if (valid) {
      res.json({ id, username });
    } else {
      throw new Error();
    }
  } catch (err) {
    err.message = 'Invalid Username or Password';
    return next(err);
  }
};
