// Required node modules
let express = require('express')
let layouts = require('express-ejs-layouts')

// Declare express app variable
let app = express()

// Set up and middleware
app.set('view engine', 'ejs')
app.use(layouts)
// Add any controllers

// Add home or catch-all routes
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3002, () => {
    console.log('You are connected on port 3002')
})