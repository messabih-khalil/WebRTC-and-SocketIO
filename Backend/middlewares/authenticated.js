const JWT = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) => {
  let token = req.body.token || req.headers['authorization'];

  if (!token) {
    return res.status(403).send('A token is Required For Authetication');
  }

  try {
    token = token.replace(/^Bearer\s+/, '');

    const decoded = await JWT.verify(token, process.env.JWT_SECERT_KEY);

    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }

  return next();
};

module.exports = isAuthenticated;
