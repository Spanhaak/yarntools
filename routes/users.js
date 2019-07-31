const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public

router.post(
    '/',
    [
    check('username', 'Username is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check('password', 'Please use a password minimal length 6 characters').isLength({ min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, email, password} = req.body;

        try {
            let user = await User.findOne({ email });

            if(user) {
                return res.status(400).json({ msg: 'Username already exists'});
            }
            user = new User({ 
                username,
                email,
                password
            });


            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000
            }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
            
        }



    }
);

module.exports = router;