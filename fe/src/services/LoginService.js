import HttpClient from './utils/HttpClient';

class LoginService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  authenticateUser(user) {
    return this.httpClient.post('/sessions', {
      body: user,
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
  }
}

export default new LoginService();
