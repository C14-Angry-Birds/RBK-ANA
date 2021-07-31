const express = require("express")
const router = express.Router()
const SchimaOfSingnU = require("../models/singnUpMo")

router.post("/signup", (req, res) => {
    const SingUser = new SchimaOfSingnU({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    SingUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.SingUser._id,
        username: req.SingUser.username,
        email: req.SingUser.email,
        password: req.SingUser.password
    })
})

module.exports = router