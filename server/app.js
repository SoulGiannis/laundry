//Importing all dependices
const dotenv = require('dotenv');
const express = require('express');
const { google } = require('googleapis');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { connectDB } = require('./db/conn.js');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const CLIENT_ID = "238748038318-ha609eqsncs45pbadc40f5lsme9rmmub.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const  REDIRECT_URI = "https://developers.google.com/oauthplayground"
const  REFRESH_TOKEN = "1//04TBqJWKi7cOjCgYIARAAGAQSNwF-L9IrRSWLhE1INFgBcYODemSitJGCvhyYnIita9SaGl0Deqrn44JfIdv4zabOJd0S7jSa8TU"


const app = express();
app.use(cors());
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
const Appointments = require('./models/appSchema');
const Orders = require('./models/orderSchema');
const Inventorys = require('./models/inventorySchema');
const Billings = require('./models/billingSchema');
const Reports = require('./models/reportSchema');
const Message = require('./models/msgSchema');
const { users } = require('moongose/models');
const authenticate = require('./middleware/authenticate');
// const User = require('./models/userSchema');


// //Registration 
app.post('/register', async(req, res)=>{
    try {
        //Get body or Data
        const { username, email, password, userType } = req.body;

        const createUser = new Users({
            username,
            email,
            password,
            userType
        });

        //Save method is used to create user
        const created = await createUser.save();
        console.log(created);

        //Creating token which is define userschema
        const token = await created.generateToken();
        res.cookie("jwt", token, {
            //Expire in 24 hrs
            expires : new Date(Date.now() + 86400000),
            httpOnly : true
        })
        res.status(200).send("Registered"); 
        
    } catch (error) {
        res.status(400).send('not able to register')
    }
});

// app.post('/register', async(req, res)=>{
//     try {
//         //Get body or Data
//         const username = req.body.username;
//         const email = req.body.email;
//         const password = req.body.password;
//         const userType = req.body.userType;

//         const createUser = new Users({
//             username : username,
//             email : email,
//             password: password,
//             userType: userType
//         });

//         //Save method is used to create user
//         const created = await createUser.save();
//         console.log(created);

//         //Creating token which is define userschema
//         const token = await created.generateToken();
//         res.cookie("jwt", token, {
//             //Expire in 24 hrs
//             expires : new Date(Date.now() + 86400000),
//             httpOnly : true
//         })
//          res.status(200).send("Registered"); 
        
//     } catch (error) {
//         res.status(400).send('not able to register')
//     }
// })

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
                // res.status(200).send({ "status": "ok", data:token})
                res.json({ status: "ok", data: user });
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

//userdata
// app.post("/userData", async (req, res) => {
//     try {
//         const token = res.cookie.jwt;
//     const user = jwt.verify(token, process.env.SECRET_KEY);
//     const useremail = user.email;
//     const userData = await Users.findOne({ email: useremail });
        
//     if (!userData) {
//       return res.send({ status: "error", data: "User not found" });
//     }
//         res.send({ status: "ok", data: userData });
//   } catch (error) {
//     if (error instanceof jwt.TokenExpiredError) {
//       return res.send({ status: "error", data: "Token expired" });
//     }
//     res.send({ status: "error", data: "Invalid token" });
//   }
// });

app.post("/userData", async (req, res) => {
  try {
      const token = req.cookies.jwt;
      
    if (!token) {
      return res.send({ status: "error", data: "Token not found" });
    }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const useremail = decoded._id;
      const userData = await Users.findById({ _id: useremail });
      
      if (!userData) {
      return res.send({ status: "error", data: "User not found" });
    }
    res.send({ status: "ok", data: userData });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.send({ status: "error", data: "Token expired" });
    }
    res.send({ status: "error", data: "Invalid token" });
  }
});


// app.post("/userData", async (req, res) => {
//   const { token } = req.body;
//   try {
//     const user = jwt.verify(token, process.env.SECRET_KEY, (err, res) => {
//       if (err) {
//         return "token expired";
//       }
//       return res;
//     });
//     console.log(user);
//     if (user === "token expired") {
//       return res.send({ status: "error", data: "token expired" });
//     }

//     const useremail = user.email;
//     Users.findOne({ email: useremail })
//       .then((data) => {
//         res.send({ status: "ok", data: user });
//       })
//       .catch((error) => {   
//         res.send({ status: "error", data: error });
//       });
//   } catch (error) { }
// });
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

        const sendMsg = new Message({
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


//getAllUser to admin page
app.get("/getAllUser", async (req, res) => {
    try {
        const allUser = await Users.find({});
        res.send({status:"ok", data:allUser})
    } catch(error) {
        res.send(error);
    }
})

app.post("/deleteUser", async (req, res) => {
    const { userId } = req.body;
    try {
        Users.deleteOne({ _id: userId }, function (err, res) {
            console.log(err);
        })
        res.send({ status: "ok", data: "deleted" })
    } catch (error) {
        res.send(error)
    }
})

//Appointment
app.post("/appointment", async (req, res) => {
  try {
    // Get user ID from JWT token
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).send({ status: "error", data: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const useremail = decoded._id;

    // Find user by ID
    const user = await Users.findById({_id:useremail});
    if (!user) {
      return res.status(400).send({ status: "error", data: "User not found" });
    }

    // Create new appointment object
    const appointment = new Appointments({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      pickupDate: req.body.pickupDate,
      deliveryDate: req.body.deliveryDate,
      pickupAddress: req.body.pickupAddress,
      deliveryAddress: req.body.deliveryAddress,
      service: req.body.service,
      additionalComment: req.body.additionalComment,
    });

    // Save appointment to database
    const savedAppointment = await appointment.save();
    if (!savedAppointment) {
      return res.status(400).send({ status: "error", data: "Unable to save appointment" });
    }

    res.status(200).send({ status: "success", data: "Appointment saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "error", data: "Unable to save appointment" });
  }
});

// app.post("/appointment", async(req, res) => {
//     try {
//         //Get body or Data
//         const token = req.cookies.jwt;
      
//     if (!token) {
//       return res.send({ status: "error", data: "Token not found" });
//     }
//       const decoded = jwt.verify(token, process.env.SECRET_KEY);
//       const useremail = decoded._id;
//       var userData = await Users.findById({ _id: useremail });
//         const { name, phone, email, pickupDate, deliveryDate, pickupAddress, deliveryAddress, service, additionalComment } = req.body;

//         const appiontmentDetails = new Appointment({
//             name,
//             phone,
//             email,
//             pickupDate,
//             deliveryDate,
//             pickupAddress,
//             deliveryAddress,
//             service,
//             additionalComment,
//         });
//         console.log(req.body)

//         //Save method is used to create user
//         const saved = await appiontmentDetails.save();
//         console.log(saved);
//         if (saved === null) {
//             res.status(400).send("try again");
//         }
//         res.status(200).send("Details saved"); 
        
//     } catch (error) {
//         res.status(400).send('not able to register')
//     }

// })

//order
app.post("/order", async(req, res) => {
    try {
    // Get user ID from JWT token
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).send({ status: "error", data: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const useremail = decoded._id;

    // Find user by ID
    const user = await Users.findById({_id:useremail});
    if (!user) {
      return res.status(400).send({ status: "error", data: "User not found" });
    }

    // Create new appointment object
    const order = new Orders({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      services: req.body.services,
      weight: req.body.weight,
      pickupDate: req.body.pickupDate,
      pickupTime: req.body.pickupTime,
      deliveryDate: req.body.deliveryDate,
      deliveryTime: req.body.deliveryTime,
    });

    // Save appointment to database
    const savedOrder = await order.save();
    if (!savedOrder) {
      return res.status(400).send({ status: "error", data: "Unable to save appointment" });
    }

    res.status(200).send({ status: "success", data: "Orders saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "error", data: "Unable to save appointment" });
  }
})

//inventory
app.post("/inventory", async(req, res) => {
    try {
    // Get user ID from JWT token
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).send({ status: "error", data: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const useremail = decoded._id;

    // Find user by ID
    const user = await Users.findById({_id:useremail});
    if (!user) {
      return res.status(400).send({ status: "error", data: "User not found" });
    }

    // Create new inventory object
    const inventory = new Inventorys({
      supplyName: req.body.supplyName,
      dateofSupply: req.body.dateofSupply,
      quantity: req.body.quantity,
      price: req.body.price,
    });

    // Save inventory to database
    const savedInventory = await inventory.save();
    if (!savedInventory) {
      return res.status(400).send({ status: "error", data: "Unable to save inventory" });
    }

    res.status(200).send({ status: "success", data: "Inventory saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "error", data: "Unable to save appointment" });
  }
})

//report
app.post("/report", async(req, res) => {
    try {
    // Get user ID from JWT token
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).send({ status: "error", data: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const useremail = decoded._id;

    // Find user by ID
    const user = await Users.findById({_id:useremail});
    if (!user) {
      return res.status(400).send({ status: "error", data: "User not found" });
    }

    // Create new appointment object
    const report = new Reports({
      date: req.body.date,
      machineId: req.body.machineId,
      totalLoads: req.body.totalLoads,
      totalWeight: req.body.totalWeight,
      totalCosts: req.body.totalCosts
    });

    // Save appointment to database
    const savedReport = await report.save();
    if (!savedReport) {
      return res.status(400).send({ status: "error", data: "Unable to save report" });
    }

    res.status(200).send({ status: "success", data: "Reports saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "error", data: "Unable to save reports" });
  }
})

//billing
app.post("/billing", async(req, res) => {
    try {
    // Get user ID from JWT token
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).send({ status: "error", data: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const useremail = decoded._id;

    // Find user by ID
    const user = await Users.findById({_id:useremail});
    if (!user) {
      return res.status(400).send({ status: "error", data: "User not found" });
    }

    // Create new appointment object
    const billing = new Billings({
      itemName: req.body.itemName,
      quantity: req.body.quantity,
      price: req.body.price,
    });

    // Save appointment to database
    const savedBilling = await billing.save();
    if (!savedBilling) {
      return res.status(400).send({ status: "error", data: "Unable to save BILLING" });
    }

    res.status(200).send({ status: "success", data: "Billing saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "error", data: "Unable to save appointment" });
  }
})


app.get("/getUserStaff", async (req, res) => {
  try {
    const allUser = await Appointments.find({});
        res.send({status:"ok", data:allUser})
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//sending mail to approved user
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
app.post("/mailapp", async (req, res) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken()
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "chaudharyrishabh029@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken

      }
    });

    let mailOptions = {
      from: 'chaudharyrishabh029@gmail.com',
      to: 'soulgiannis22@gmail.com',
      subject: 'Rajeshwari Laundry Appointment Approved',
      text: 'Dear Customer,  Your appointment with rajeshwari laundry is approved on given time you can contact 329049032 for more details.'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(400).send({ status: "error", data: "unable to send mail to user" });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send({ status: "success", data: "Mail sent successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "error", data: "unable to send mail" });
  }
});

//rejected mail to customer
app.post("/mailrej", async (req, res) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken()
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "chaudharyrishabh029@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken

      }
    });

    let mailOptions = {
      from: 'chaudharyrishabh029@gmail.com',
      to: 'soulgiannis22@gmail.com',
      subject: 'Appointment with rajeshwari laundry is Rejected',
      text: 'Dear Customer, Your appointment with rajeshwari laundry is Rejected for more because of some reason for more details please contact on 3534058203.'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(400).send({ status: "error", data: "unable to send mail to user" });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send({ status: "success", data: "Mail sent successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "error", data: "unable to send mail" });
  }
});


//Logout Page
app.get('/logout', (req,res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("USer Logged Out");
})

//Authentication
app.get('/auth', authenticate, (req, res, next) => {
  
})

//Run Server
app.listen(port, ()=>{
    console.log("Listening on 3001");
})