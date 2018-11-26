const jwt = require('jwt-simple');

exports.signin = async (req, res, next) => {
  res.json({ token: tokenForUser(req.user) });
}

function tokenForUser(user) {
  return jwt.encode({
    sub: user.id,
    iat: new Date().getTime(),
  }, process.env.SECRET);
}