
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
   


app.get('/', (req, res) => {
    res.send('Hello World!dfg')
  })
  
  app.get('/test', (req, res) => {
    // res.send('Hello test World!')
    res.status(200).json({name:"sunil" , mobile:"9596"})
  
  })

  app.get("/test/:id",(req, res)=>{
    const id = req.params.id
    res.status(200).json({name:`hello name is world ${id}`})

  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})