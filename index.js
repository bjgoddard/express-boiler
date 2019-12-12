// Required node modules
let express = require('express')

// Declare express app variable
let app = express()

// Set up and middleware

// Add any controllers

// Add home or catch-all routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(3002, () => {
    console.log('You are connect on port 3002')
})