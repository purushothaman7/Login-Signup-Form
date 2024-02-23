const express = require("express")
const cors=require("cors")
const session = require('express-session');
const path = require("path")
const app = express()
const bcrypt = require('bcrypt');
const { mongoConnect, User } = require("./mongo");
const { log } = require("console");
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const jwt = require('jsonwebtoken');
// const tempelatePath = path.join(__dirname, '../reacts/src/components')
// const publicPath = path.join(__dirname, '../reacts/public')
// console.log(publicPath);

// app.set('view engine', 'ejs')
// app.set('views', tempelatePath)
// app.use(express.static(publicPath))

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
        // res.json('exists');
        const token = jwt.sign({ name: req.body.name }, "secret", {
            expiresIn: 86400 // expires in 24 hours
          });
          console.log(token)
        res.status(200).json({ token });
    } else {
        res.json('notexist');
    }
});


  app.get('/data', async (req, res) => {
    try {
      const data = await User.find();
      console.log(data)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.post('/login', async (req, res) => {
    const checking = await User.findOne({ name: req.body.name })
    // console.log(req.body.password);
    // console.log(checking.password);
    try {
        const result = await bcrypt.compare(req.body.password, checking.password);
        if (result) {
            const token = jwt.sign({ name: req.body.name }, "secret");
            res.json({ token });
            // res.json("exists")
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

app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected endpoint reached!' });
  });

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(403).json({ message: 'Token not provided' });
    }
  
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      req.name = decoded.name;
      next();
    });
  }
app.listen(port, () => {
    console.log("port connected  $port");
})