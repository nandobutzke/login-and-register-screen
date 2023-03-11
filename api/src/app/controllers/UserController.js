const { hash } = require('bcryptjs');
const UserRepository = require('../repositories/UserRepository');

class UserController {
  async store(request, response) {
    const { name, email, password } = request.body;

    const emailAlreadyExists = await UserRepository.findEmail(email);

    if (emailAlreadyExists) {
      return response.status(400).json({ error: 'Email already exists!' });
    }

    const hashedPassword = await hash(password, 8);

    const user = await UserRepository.create({ name, email, password: hashedPassword });

    delete user.password;

    response.status(201).json({ ok: 'success' });
  }
}

module.exports = new UserController();
