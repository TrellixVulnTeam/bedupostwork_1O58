const express = require('express')
const bodyParser = require('body-parser');
const Investment = require("./entities/Investment");
const InvestmentRepository = require("./repositories/InvestmentRepository");
const cors = require('cors');
const db = require("./database");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cors())


app.post('/add-investment', (req, res) => {

    const investmentData = {
        name: req.body.name,
        description: req.body.description,
        interest: req.body.interest,
        startingAmount: req.body.startingAmount,
        startDate: new Date(req.body.startDate),
        duration: req.body.duration,
    };
    const repository = new InvestmentRepository()

    const investment = Investment.addInvestment(investmentData.name, investmentData.description, parseInt(investmentData.interest), parseInt(investmentData.startingAmount), investmentData.startDate, parseInt(investmentData.duration), repository);
    console.log(investment)
    repository.save(investment)
    res.send(investment);
})

app.get('/returnDBValues', (req, res) => {
   try{
       const sql = `SELECT * FROM investment where id = '${req.query.id}'`;
       const params = [];
       db.get(sql, params, (err, result) => {
           if (err) {
               console.log(err)
               return;
           }
           console.log(result)
           res.send(result);
       })
   } catch (err) {
       return console.error(err.message);
   }
})


module.exports = app;