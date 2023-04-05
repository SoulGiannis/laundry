const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS= {
            dbName: process.env.db_name,
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connected successfully");
    } catch(err) {
        console.log(err);
    }
};  

module.exports = { connectDB };

// const mongoose = require('mongoose');
// const db = process.env.DATABASE;

// mongoose.set('strictQuery', false);

//     mongoose.connect(db, {
//         useNewUrlParser : true,
//         useUnifiedTopology : true
//     }).then(() => {
//         console.log("Connected to Mongo Successfully");
//     }).catch((e) => {
//         console.log(e);
//     })
