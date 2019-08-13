let express = require('express')
let app = express()
//path is a node module
let path = require('path')

//Configure app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views' ))

//configure database
let players = require('./data/players')

app.get('/', (req, res) => {
    res.render('index', {
        player: players[1]
    })
})

app.listen(3000, () => "Listening on port 3000")