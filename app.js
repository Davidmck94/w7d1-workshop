const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {Cheese, Board, User} = require('./models')
const app = express()
// buildDB()


// app.get('/cheeses/:cheese', async (req, res) => {


//     console.log(req.params)
//     let newString = req.params.cheese[0].toUpperCase() + req.params.cheese.slice(1).toLowerCase()




// // app.get('feta', async (req, res) => {
//     //Database query
//     const queriedCheese = await Cheese.findOne({where: {title: newString}})
//     if(!queriedCheese) {
//         res.send("Sorry, we don't have that cheese.")
//     }
//     let {title, description} = queriedCheese
//     let payload = {
//         title: title,
//         description: description
//     }
//     res.send(payload)
    
// })



// app.get('/cheeses', async (req, res) => {
//     // console.log(req.query.startsWith.toUpperCase())
//     const dbQuery = await Cheese.findAll()
//     let startsWithC = dbQuery.filter((cheese) => {
//         if (cheese.title[0] === req.query.startswith.toUpperCase()) {
//             return true
//         }

//     })

//     if(startsWithC.length === 0) {
//         res.send("Sorry, no matches.")
//         res.send(200)
//         return
//     }
//     console.log(startsWithC)

//     res.sendStatus(200)
// })

app.use(express.json())

app.post('/boards', async (req, res) => {
    //add incoming board to db
    //Send something back
    await Board.create(req.body)
    console.log(req.body)
    res.sendStatus(200)
})

app.put('/boards', async (req, res) => {
    //update a record
    //send something back
   
    await Board.update({rating: req.body.rating,}, 

    {where: {id:req.body.id},

    })
    console.log(req.body)
    res.sendStatus(200)

})






app.listen(3000, () => {
    console.log('The server is live amd listening at http://localhost:3000')
})



