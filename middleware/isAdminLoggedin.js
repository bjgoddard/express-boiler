module.exports = (req, res, next) => {
    if (req.user && req.user.admin) {
        //Someone is logged in; and they are an admin
        next()
    }
    else {
        //No one is logged in. Redirect them away from protected page
        req.flash('error', 'You must be an admin logged in to view this page')
        res.redirect('/profile')
    }
}