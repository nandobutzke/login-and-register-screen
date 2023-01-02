const { verify } = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = async (request, response, next) => {
  const { authorization } = request.headers;

  console.log(authorization);

  if (!authorization) {
    throw new Error('JWT Token is missing!');
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    console.log(decoded);

    return next();
  } catch {
    throw new Error('Invalid JWT Token!');
  }
};
