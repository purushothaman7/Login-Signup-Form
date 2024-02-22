const express = require("express")
const session = require('express-session');
const path = require("path")
const app = express()
const bcrypt = require('bcrypt');
const { mongoConnect, User } = require("./mongo");
const { log } = require("console");
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))



mongoConnect()

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})

//middleware



app.post('/signup', async (req, res) => {

    const hash = await bcrypt.hash(req.body.password, 10)

    const data = new User({
        name: req.body.name,
        password: hash
    })


    try {
        const checking = await User.findOne({ name: req.body.name })
        if (checking) {
            res.send("user details already exists")
        }
        else {
            await data.save()
            res.status(201).render("home", {
                naming: req.body.name
            })
        }

    }
    catch (err) {
        console.log(err);
        res.render("signup")
    }

})



app.post('/login', async (req, res) => {
    const checking = await User.findOne({ name: req.body.name })
    // console.log(req.body.password);
    // console.log(checking.password);
    try {
        const result = await bcrypt.compare(req.body.password, checking.password);
        if (result) {
            res.render("home",{naming:req.body.name});
        }
        else
            res.render("login");
    }
    catch (e) {

        res.send("wrong details")


    }


})



app.listen(port, () => {
    console.log('port connected $port');
})