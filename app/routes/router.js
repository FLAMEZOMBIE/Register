const router = require('express').Router();
const User = require('../models/model')

// Memanggil User
router.get("/get", async(req, res) => {
    let query = await User.find();

    return res.json({
        code: 200,
        message: "Sukses Get Data",
        success: true,
        data: query
    })
})

// Menambah User
router.post("/post", async(req, res) => {
    let model = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    let query = await User.create(model);

    return res.json({
        code: 201,
        message: "Sukses Insert Data",
        success: true,
        data: query
    })
})

module.exports = router;