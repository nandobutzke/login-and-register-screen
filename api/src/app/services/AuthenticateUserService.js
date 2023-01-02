const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const UserRepository = require('../repositories/UserRepository');
const authConfig = require('../config/auth');

class AuthenticateUserService {
  async execute(request, response) {
    const { email, password } = request.body;

    const user = await UserRepository.findUserByEmail(email);

    if (!user) {
      return response.status(400).json({ error: 'Incorrect email/password combination.' });
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return response.status(400).json({ error: 'Incorrect email/password combination.' });
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    delete user.password;

    response.status(200).json({ user, token });
  }
}

module.exports = new AuthenticateUserService();
