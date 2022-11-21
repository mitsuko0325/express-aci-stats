const fs = require('fs')

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req,res)=>{
    res.send('Hello here is "/" ')
    console.log('Hello here is "/" ')
})

// postman Headers =  Content-Type: application/json, Body = raw {"text": "from postman"}
// app.post('/aci-stats', (req, res)=>{
//     today = new Date()
//     console.log(req.body)
//     res.send('POST OK')
//     fs.writeFile(`./aci-stats-${today}`, JSON.stringify(req.body), (err)=>{
//         if (err) throw err
//         console.log("write done")
//     })
// })

app.put('/aci-stats', (req, res)=>{
    today = new Date()
    console.log(req.body)
    res.send('PUT OK')
    fs.writeFile(`./aci-stats-${today}`, JSON.stringify(req.body), (err)=>{
        if (err) throw err
        console.log("write done")
    })
})

app.listen(port, ()=>{
    console.log(`this app listening on port ${port}`)
})


