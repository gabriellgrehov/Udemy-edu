const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const router = express.Router();


router.post('/signup', async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userId: user._Id }, "my_Secret_key");
        res.send({ token });
    }
    catch (err) {
        return res.status(422).send(err.message);
    }

});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send({ error: "must provide an email and password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: "invalid email or password" });
    }
    try {
        const isMatch = await user.comparePassword(password);
        if (isMatch) {
            const token = jwt.sign({ userId: user.id }, "MY_SECRET_KEY");
            res.send({ token });
        } else {
            return res.status(422).send({ error: "invalid email or password" });
        }
    } catch (err) {
        return res.status(422).send({ error: "invalid email or password" });
    }
});

module.exports = router;