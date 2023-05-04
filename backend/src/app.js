const express = require("express");
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./Routes/UserRoute')
mongoURl = "mongodb+srv://adham:alovek12345@cluster0.yk4zq.mongodb.net/NumVerify_DataBase"
mongoose.connect(mongoURl)
.then(()=>{
  console.log("MongoDB is now connected!")
 app.listen(5000, () => {
    console.log("Listening to requests on http://localhost:5000");
  })
})
.catch(err => console.log(err));
 app.use(userRoute);