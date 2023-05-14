const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;
    // Check if User Exist

    const userExists = await User.exists({ mail: mail });

    if (userExists) {
      return res.status(409).send('Email already in use.');
    }

    // Crypting The Password

    const hashPasswrod = await bcrypt.hash(password, 10);

    // Creat New User

    const newUser = await User.create({
      mail: mail.toLowerCase(),
      password: hashPasswrod,
      username: username,
    });

    // Create Jwt Token
    // Generate Token
    const token = await JWT.sign(newUser.id, process.env.JWT_SECERT_KEY);
    // Send The Token Back To The Client
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error Occured. please try again');
  }
};

module.exports = postRegister;
