const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
  })

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
  })

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
  })

  app.get('/process', (req, res) => {
    var n1 = req.query.text1;
    var n2 = req.query.text2;
    var n3 = req.query.text3;
    var n4 = req.query.text4;
    var n5 = req.query.text5;

    var avg = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5)/5;

    var tab =
    ` <table border='1'>
        <tr>
            
            <th>Math</td>
            <th>English</th>
            <th>Science</th>
            <th>Hindi</th>
            <th>Sanskrit</th>

        </tr>
        <tr>
            
            <td>${n1}</td>
            <td>${n2}</td>
            <td>${n3}</td>
            <td>${n4}</td>
            <td>${n5}</td> 
        </tr>
        
    </table>`

    res.send(tab);
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})