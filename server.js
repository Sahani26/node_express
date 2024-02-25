
const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const dataArray = require('./students');

app.use(express.json()) //post k phle chlata hai

app.get('/r', (req, res) => {
  res.send('Hello World!dfg')
})
app.get('/', (req, res) => {
  res.send(dataArray);
});


app.get("/test/:id", (req, res) => {
  const id = req.params.id
  res.status(200).json({ name: `hello name is world ${id}` })

})

app.post('/post', (req, res) => {



  if (!req.body.email) {
    res.status(400)
    return res.json({ error: "email reqire" })
  }
  const user = {
    id: dataArray.length + 1,
    first_name: req.body.first_name,
    email: req.body.email,
  }
  dataArray.push(user)
  res.json(user);

})


// app.put('/put/:id', (req, res) => {
//   let id = req.params.id
//   let first_name = req.body.first_name
//   let email = req.body.email
//   let index = students.findIndex((dataArray) => {
//     return (dataArray.id == Number.parseInt(id))
//   })
//   if (index >= 0) {
//     let std = students[index]
//     std.first_name = first_name
//     std.email = email
//     res.json(std)
//   }
//   else {
//     res.status(400)
//   }

// })
app.put('/put/:id', (req, res) => {
  // 65 66 for read previous data request.body is udr for data read
  const id = req.params.id
  let first_name = req.body.first_name
  let email = req.body.email
  1 //perticular  array ke searching ke liye findindex use krte hai auer esme ek element pass krte hai

  let index = dataArray.findIndex((students) => {
    return (students.id == Number.parseInt(id))
  })
  //Number.parseInt integer m bdlne k liye

  if (index >= 0) {
    let std = dataArray[index]
    std.first_name = first_name
    std.email = email
    res.json(std)

    //res.json(std) jo update hai usme send krne k liye nya bhejna
  }
  else {
    res.status(400)
  }


})


app.delete('/delete/:id', (req , res)=>{
  const id = req.params.id
  let index = dataArray.findIndex((students) => {
    return (students.id == Number.parseInt(id))
  })


  
  if (index >= 0) {
    let std = dataArray[index]
    dataArray.splice(index , 1)
    res.json(std)

    //res.json(std) jo update hai usme send krne k liye nya bhejna
  }
  else {
    res.status(400)
    res.end()
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




