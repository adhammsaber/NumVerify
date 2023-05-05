const express = require('express');
const SearchSchema = require('../Models/SearchSchema');
const SRoute = express.Router();


SRoute.get('/saveNumber/valid:valid/number:number',async(req,res)=>{
    var valid = req.params.valid;
    var number = req.params.number;
    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();
    var date1=date+"-"+month+"-"+year

    const num = new SearchSchema({Number:number,status:valid,date:date1})
    await num.save()
    res.send(num)
})


SRoute.get('/gethistory',async(req,res)=>{
    const history = await SearchSchema.find()
    res.send(history)
})

// filter by number
SRoute.get('/filter/number/:number', async (req, res) => {
    const { number } = req.params;
    const results = await SearchSchema.find({ Number: number }).exec();
    res.json(results);
  });
    
  // filter by date
  SRoute.get('/filter/date/:date', async (req, res) => {
    const { date } = req.params;
    const results = await SearchSchema.find({ date }).exec();
    res.json(results);
  });
  
  
  // filter by status
  SRoute.get('/filter/status/:status', async (req, res) => {
    const { status } = req.params;
    const results = await SearchSchema.find({ status }).exec();
    res.json(results);
  });
  

module.exports =SRoute;