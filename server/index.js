const express = require("express")
const cors=require("cors")
const session = require('express-session');
const path = require("path")
const app = express()
const bcrypt = require('bcrypt');
const { mongoConnect, User } = require("./mongo");
const { log } = require("console");
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

// Protected route
app.get('/home', isAuthenticated, (req, res) => {
    res.render('home');
});



// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login');
}

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/login');
    });
});

mongoConnect()

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/adminlogin',  (req, res) => {
    res.render('adminlogin');
});
app.get('/admin',  (req, res) => {
    res.render('admin');
});



app.post('/signup', async (req, res) => {

    const hash = await bcrypt.hash(req.body.pass, 10)

    const data = new User({
        name: req.body.name,
        password: hash
    })

    console.log(req.body.name)
    console.log(req.body.pass)
    try {
        const checking = await User.findOne({ name: req.body.name })
        if (checking) {
            res.json("exists")
        }
        else {
            // await data.save()
            // res.status(201).render("home", {
            //     naming: req.body.name
            // })

            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch (err) {
        console.log(err);
        // res.render("signup")
    }

})





app.post('/adminlogin', (req, res) => {
    
   console.log(req.body.name)
   console.log(req.body.password)
    if (req.body.name === "admin" && req.body.password === "admin") {
        req.session.user = true;
        res.json('exists');
    } else {
        res.json('notexist');
    }
});


app.post('/login', async (req, res) => {
    const checking = await User.findOne({ name: req.body.name })
    // console.log(req.body.password);
    // console.log(checking.password);
    try {
        const result = await bcrypt.compare(req.body.password, checking.password);
        if (result) {
            res.json("exists")
            // req.session.user=true;
            // res.render("home",{naming:req.body.name});
        }
        else
            res.json("notexist");
    }
    catch (e) {

        // res.redirect("/login");
        console.log(e)


    }


})



app.listen(port, () => {
    console.log("port connected  $port");
})