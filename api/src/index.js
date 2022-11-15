const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

dotenv.config();

app.post('/auth/generateToken', (request, response) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    let data = {
        time: Date(),
        id: 'fguhbdfugd-dfgdfgdfdfg-345fgsdg34gb'
    };

    const token = jwt.sign(data, jwtSecretKey);

    response.send(token);
});

app.get('/auth/validateToken', (request, response) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let tokenHeaderKey  = process.env.TOKEN_HEADER_KEY;

    try {
        const token = req.header(tokenHeaderKey);

        const verified = jwt.verify(token, jwtSecretKey);

        if (verified) {
            return response.send('Success!');
        } else {
            return response.status(401).send({ error: 'Error!' });
        }
    } catch (error) {
        return response.status(401).send({ error });
    }
});

app.listen(3333, () => console.log('Server started at http://localhost:3333'));
