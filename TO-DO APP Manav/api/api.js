const express = require('express')
const app = express()
const User = require('./models/users')
const studentRouter = require('./router/routes')
const cors = require('cors')
app.use(cors())
app.use(studentRouter);
app.use(express.json());
app.listen(3200)
