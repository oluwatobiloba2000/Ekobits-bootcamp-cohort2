const db = require('../db/index');
const jwt = require('jsonwebtoken');
const  bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();


router.post('/users/login', async function(req, res, next){
    const {username, password} = req.body;

    try {
        if(!username || !password){
            return res.status(400).json({
                message: 'all fields required',
                code: 400
            })
        }

        const userExist = await db.query('SELECT * FROM users WHERE username=$1', [username]);
        if(userExist.rows[0]){
            const match = await bcrypt.compare(
                password,
                userExist.rows[0].password,
            );
            console.log("router.post -> match", match)
            if(match){
               return jwt.sign({isAdmin: userExist.rows.isAdmin,
                          username: userExist.rows.username,
                          id: userExist.rows.id}, process.env.SECRET_JWT_KET, {expiresIn: '2d'}, function (err, token){
                                if(err){
                                    return res.status(403).send(err);
                                }else{
                                    return res.status(200).json({
                                        message: "login success",
                                        token: token
                                    })
                                }
                          })
            }else{
                return res.status(403).json({
                    message: "Incorrect username and password",
                    code: 403
                })
            }
        }

        return res.status(403).json({
            message: "Incorrect username and password",
            code: 403
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;