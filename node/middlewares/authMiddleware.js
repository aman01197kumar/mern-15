
export const authMiddleware = (req, res, next) => {
    const { student } = req.body

    if (student.toLowerCase() !== 'mern') {
        return res.send('only mern students are allowed inside')
    }
    next()
}