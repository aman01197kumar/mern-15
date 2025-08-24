// const express = require('express')
const { router } = require('./routes/user.route.js')
// const { router } = require('./routes/user.route.js')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()


const app = express()

// (PORT_NUMBER,callback function)
// app.get('/', (req, res) => res.send('route is working fine!!!'))

app.use(cors())
app.use(express.json())


const MONGO_URI = process.env.MONGO_URI;
// app.use(cors({ origin: true }));
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Connection error:", err));

app.use(express.json());


//application based middleware
// app.use(authMiddleware)

app.get('/', (req, res) => res.send('home page'))

//routing based middleware
// app.get('/users',authMiddleware, (req, res) => res.send('usersssss!!!'))
app.use(router)
app.listen(3000, () => console.log('working fine!!'))

