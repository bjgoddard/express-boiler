module.exports = (req, res, next) => {
    if (req.user) {
        //Someone is logged in;
        next()
    }
    else {
        //No one is logged in. Redirect them away from protected page
        req.flash('error', 'You must be logged in to view this page')
        res.redirect('/auth/login')
    }
}