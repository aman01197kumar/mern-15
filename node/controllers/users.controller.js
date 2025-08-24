const { USER } = require('../models/user.schema.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

let token = ''

const signup = async (req, res) => {
    const { username, email, contact, password } = req.body

    const user = await USER.findOne({ email: email })

    if (user) {
        res.status(401).json({ message: 'user already exists', status: 401, success: false })
        return
    }

    const salt_val = 10
    const hashedPassword = await bcrypt.hash(password, salt_val)

    const newUser = new USER({
        username, email, contact, password: hashedPassword
    })

    await newUser.save()

    return res.status(200).json({ message: 'User saved successfully!!', newUser, status: 200, success: true })

    // res.send(hashedPassword)
}

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await USER.findOne({ email: email })

    if (!user)
        return res.status(404).json({ message: 'user not found', status: 404, success: false })

    const isMatched = await bcrypt.compare(password, user.password)

    if (!isMatched)
        return res.status(301).json({ message: 'password not matched!!', success: false, status: 301 })

    const payload = {
        email: user.email
    }
    token = await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1hr' })
    // return res.status(200).json({ message: 'user logged in successfully!!', success: true, status: 200 })
    res.status(200).json({ message: 'user loggedin succeessfully!!', status: 200, success: true, token })

}

const content = async (req, res) => {
    const authHeader = req.headers['authorization'].split(' ')[1]

    const decode = await jwt.verify(authHeader, process.env.SECRET_KEY)

    return res.send(decode)


}

module.exports = { signup, login, content }