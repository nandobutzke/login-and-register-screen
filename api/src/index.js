const express = require('express');
const sessionRoutes = require('./routes/session.routes');
const cors = require('./app/middlewares/cors');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(sessionRoutes);
app.use(userRoutes);

app.listen(3333, () => console.log('Server started at http://localhost:3333'));
