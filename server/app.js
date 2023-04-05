//Importing all dependices
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('./db/conn.js');
const cookieParser = require('cookie-parser');

const app = express();

//Configure ENV File & Require Connection File
dotenv.config();
require('./db/conn')
const port = process.env.PORT;

//Methods to fetch data from Front-end
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

const DATABASE_URL = process.env.DATABASE
connectDB(DATABASE_URL);

//Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const { users } = require('moongose/models');
const authenticate = require('./middleware/authenticate');
// const User = require('./models/userSchema');


//Registration 
app.post('/register', async(req, res)=>{
    try {
        //Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        //Save method is used to create user
        const created = await createUser.save();
        console.log(created);

        //Creating token which is define userschema
        const token = await user.generateToken();
        res.cookie("jwt", token, {
            //Expire in 24 hrs
            expires : new Date(Date.now() + 86400000),
            httpOnly : true
        })
        
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send('not able to register')
    }
})

// app.post('/register', async(req, res)=>{
//     try {
//         //Get body or Data
//         const username = req.body.username;
//         const email = req.body.email;
//         const password = req.body.password;

//         const createUser = new Users({
//             username : username,
//             email : email,
//             password : password
//         });

//         //Save method is used to create user
//         const created = await createUser.save();
//         console.log(created);
//         res.status(200).send("Registered");
//     } catch (error) {
//         res.status(400).send('not able to register')
//     }
// })

//Login User
app.post('/login', async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //Find user if exists
        const user = await Users.findOne({email : email})
        if(user) {
            //Password Verfification
            const isMatch = await bcryptjs.compare(password, user.password)

            if (isMatch) {
                //Creating token which is define userschema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    //Expire in 24 hrs
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                console.log("logged in successfully")
                res.status(200).send({ "status": "success", "message": "login success" })
            }else{
                res.status(400).send({"status":"failed","message":"failed to login invalid"})
            }
        }else{
            res.status(400).send({"status":"failed","message":"failed to login invalid"})
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

// app.post('/login', async(req, res)=>{
//     try {
//         const email = req.body.email;
//         const password = req.body.password;

//         //Find user if exists
//         const user = await Users.findOne({email : email})
//         if(user) {
//             //Password Verfification
//             const isMatch = await bcryptjs.compare(password, user.password)

//             if (isMatch) {
//                 //Generating token which is define usersschema
//                 const token = await user.generateToken();
//                 res.cookie("jwt", token, {
//                     //Expire in 24 hrs
//                     expires : new Date(Date.now() + 86400000),
//                     httpOnly : true
//                 })
//                 console.log("logged in successfully")
//                 res.status(200).send({ "status": "success", "message": "login success" })
//             }else{
//                 res.status(400).send({"status":"failed","message":"failed to login invalid"})
//             }
//         }else{
//             res.status(400).send({"status":"failed","message":"failed to login invalid"})
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

//Message 
app.post('/message', async(req, res)=>{
    try {
        //Get body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Users({
            name : name,
            email : email,
            message : message
        });

        //Save method is used to create user
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");
    } catch (error) {
        res.status(400).send(error)
    }
})

//Logout Page
app.get('/logout', (req,res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("USer Logged Out");
})

//Authentication
app.get('/auth', authenticate, (req, res, next) =>{

})

//Run Server
app.listen(port, ()=>{
    console.log("Listening on 3001");
})