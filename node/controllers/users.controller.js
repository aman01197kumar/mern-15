 const {USER} = require('../models/user.schema.js')

const signup = async (req, res) => {
    const { username, email, contact, password } = req.body

    const user = await USER.findOne({ email: email })

    if (user) {
        res.status(401).json({ message: 'user already exists', status: 401, success: false })
        return
    }

    const newUser = new USER({
        username, email, contact, password
    })

    await newUser.save()

    return res.status(200).json({ message: 'User saved successfully!!', newUser, status: 200, success: true })
}

module.exports = {signup}