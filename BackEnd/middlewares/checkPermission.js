import jwt from 'jsonwebtoken'
import User from '../Models/User'

const checkPerMission = async (req, res, next) => {
    try {
        const author = req.headers.authorization
        if (!author) {
            return res.status(400).json({
                message: "Dang nhap de thuc hien chuc nang"
            })
        }
        const token = author && author.split(" ")[1]
        jwt.verify(token, "123456", async (err, payload) => {
            if (err) {
                if (err.name === "JsonWebTokenError") {
                    return res.status(400).json({
                        message: "Token Khong ton tai"
                    })
                }
                if (err.name === "TokenExpiredError") {
                    return res.status(400).json({
                        message: "Token da het han"
                    })
                }
            }
            const userId = await User.findById(payload.id)
            if (userId.role !== "admin") {
                return res.status(403).json({
                    message: "Ban khong co quyen"
                })
            }
            next();
        })
    } catch (error) {

    }
}

export default checkPerMission