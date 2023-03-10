const { verify } = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Error('JWT Token is missing!');
  }

  const [, token] = authorization.split(' ');

  try {
    verify(token, authConfig.jwt.secret);

    return next();
  } catch {
    throw new Error('Invalid JWT Token!');
  }
};
