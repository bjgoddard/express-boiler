// Create an express router object
let router = require('express').Router()

//Include  a reference to the models for db access
let db = require('../models')

// Define the routes
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', (req, res) => {
    res.send(req.body)
})

router.get('/signup', (req, res) => {
    res.render('auth/signup', {data: {} })
})

router.post('/signup', (req, res) => {
    if (req.body.password !== req.body.password_verify) {
        //User's password verification doesn't match - probably a typo 
        req.flash('error', 'Passwords do not match!')
        res.render('auth/signup', { data: req.body, alerts: req.flash() })
    }
    else {
        //Attempt to find a user by their email. If not found, then create them
        db.user.findOrCreate({
            where: { email: req.body.email },
            defaults: req.body
        })
        .then(([user, wasCreated]) => {
            if (wasCreated) {
                //This is intended user action
                //Now autoomatically log in user to new acct
                //TODO: Login the user
                res.send('Successful Create User = Go look at DB')
            }
            else {
                //The user already has an account (probably forgot)
                req.flash('error', 'Account already exists. Go Log in!')
                res.redirect('/auth/login')
            }
        })
        .catch(err => {
            console.log('Error when creating a user', err)

            //Check for validation errors (Okay for user to see)
            if (err.errors) {
                err.errors.forEach(e => {
                    if (e.type === 'Validation error') {
                        req.flash('error', e.message)
                    }
                })
            }
            else {
                req.flash('error', 'Something happened ???')
            }
            //General error
            res.redirect('/auth/signup')
        })
    }
    
})

router.get('/logout', (req, res) => {
    res.send('GET auth/logout')
})



// Export the router object so we can include it in other files
module.exports = router

