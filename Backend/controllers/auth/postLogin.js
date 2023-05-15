const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;
    // Check if User Exist

    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate Token
      const token = await JWT.sign(user.id, process.env.JWT_SECERT_KEY);
      // Response
      return res.status(200).json({
        success: true,
        token: token,
      });
    }

    return res.status(400).json({
      success: false,
      message: 'Invalid Credentials. PLease Try again',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = postLogin;
