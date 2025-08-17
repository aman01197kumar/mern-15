// const express = require('express')
const { router } = require('./routes/user.route.js')
// const { router } = require('./routes/user.route.js')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

// (PORT_NUMBER,callback function)
// app.get('/', (req, res) => res.send('route is working fine!!!'))

app.use(express.json())

try {
    mongoose.connect(process.env.MONGO_URI)
    console.log('db connected!!!');
}
catch (err) {
    console.log(err);
}


//application based middleware
// app.use(authMiddleware)

app.get('/', (req, res) => res.send('home page'))

//routing based middleware
// app.get('/users',authMiddleware, (req, res) => res.send('usersssss!!!'))
app.use(router)
app.listen(3000, () => console.log('working fine!!'))

