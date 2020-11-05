require('./data/database');
const express = require('express');
const jwt = require('jsonwebtoken');
const authRouter = require('./routes/auth');
const eventRouter = require('./routes/events');
const cors = require('cors');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/login', authRouter);
app.use('/events', eventRouter);
app.listen(3000);