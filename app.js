const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {Cheese} = require('./models')
const app = express()
buildDB()


app.get('/cheeses/:cheeses', async (req, res) => {
    req.params




// app.get('feta', async (req, res) => {
    //Database query
    const queriedCheese = await Cheese.findOne({where: {title: 'Feta'}})
    let {title, description} = queriedCheese
    let payload = {
        title: title,
        description: description
    }
    res.send(payload)
})

app.get('/starts-with-c', async (req, res) => {
    const dbQuery = await Cheese.findAll()
    let startsWithC = dbQuery.filter((cheese) => {
        if (cheese.title[0] === 'C') {
            return true
        }

    })

    res.send(startsWithC)
})




app.listen(3000, () => {
    console.log('The server is live amd listening at http://localhost:3000')
})



