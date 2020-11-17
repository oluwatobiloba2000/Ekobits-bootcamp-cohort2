const db = require('../db/index');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const checkToken  = require('../middleware/checkToken');
const router = express.Router();


router.post('/users', async function(req, res, next){
    const {username, password} = req.body;
    console.log("router.post -> body", req.body)
    console.log("router.post -> password", password)
    console.log("router.post -> username", username)
    

    try {
        if(!username || !password){
            return res.status(400).json({
                message: 'all fields required',
                code: 400
            })
        }

        const userExist = await db.query('SELECT * FROM users WHERE username=$1', [username]);
        if(userExist.rows[0]){
            return res.status(400).json({
                message: "username already taken",
                code: 400
            })
        }

      //  hash the incoming password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

        const insertedUser = await db.query('INSERT INTO users (username, password) VALUES($1, $2) RETURNING *', [username, hashedPassword]);

        jwt.sign({isAdmin: insertedUser.rows[0].isAdmin,
                    username: insertedUser.rows[0].username,
                    id: insertedUser.rows[0].id}, process.env.SECRET_JWT_KET, {expiresIn: '2d'}, (err, token)=>{
                        if(err){
                            return res.status(403).send(err);
                        }else{
                            return res.status(201).json({
                                user: insertedUser.rows,
                                message: "user created successfully",
                                token
                            })
                        }
                    })

    } catch (error) {
        next(error);
    }
})

router.get('/users', checkToken , async function(req, res, next){
    const {isAdmin} = req.user;

    try {
        if(isAdmin){
            const users = db.query('SELECT * FROM users')
            return res.status(200).json({
                message: "all users",
                users: users.rows
            })

        }else{
            return res.status(403).json({
                code: 403,
                message: "only for admins"
            })
        }
    } catch (error) {
         next(error);
    }
})

module.exports = router;