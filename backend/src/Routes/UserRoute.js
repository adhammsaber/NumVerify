const express = require('express');
const UserSchema = require('../Models/UserSchema');
const URoute = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'test';

URoute.get('/SignUp/UserName:UserName/Password:Password',async function(req,res){
    var UserName = req.params.UserName;
    var Password = req.params.Password;
    try {
        const user = new UserSchema({UserName,Password});
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(user.Password, salt);
        const saveduser = await user.save();
          res.send(saveduser)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

URoute.get('/LoggedIn/UserName:UserName/Password:Password',async function(req,res){
    var UserName = req.params.UserName;
    var Password = req.params.Password;
        try {
            const user = await UserSchema.findOne({ UserName });
            if (user) {
                const isMatch = await bcrypt.compare(Password, user.Password);
                if (isMatch) {
                    const payload = {
                        user: {
                          id: user._id,
                          userName: user.UserName,
                        },
                      };
                      const options = {
                        expiresIn: '1h', // The token will expire in 24 hour
                      };
                      const token = jwt.sign(payload, secretKey, options);
                      user.Token = token;
                      console.log(token)
                    res.status(201).send({token});
                } else {
                    res.status(401).send('Invalid Password');
                }
            } else {
                res.status(401).send('Invalid UserName');
            }
        
    } catch (error) {
        res.status(500).send('Server Error');
    }
})


module.exports = URoute;