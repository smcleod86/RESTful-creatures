let express = require('express')
let app = express()
let fs = require('fs')


app.get('/dinosaurs', function(req, res) {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    res.send(dinoData)
})

app.post('/dinosaurs', function(req, res) {
    // Opening ds file
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    // Add item from user form
    dinosaurs.push(req.body)

    // Save new dinosaur objext
    fs.writeFileSync("./dinosaurs.jspon", JSON.stringify(dinosaurs))

    // Redirect to the GET/ dinosaur route
    res.redirect('/dinosaurs')
})

app.get('/dinosaurs/:id', function(req, res) {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

        // get the array index from our url
        let dinoIndex = parseInt(req.params.id)

        // res.send whichever dino index objext got called
        res.send(dinoData[dinoIndex])
})


app.listen(3000)