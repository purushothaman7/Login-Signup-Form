const express = require("express")
const cors=require("cors")
const session = require('express-session');
const path = require("path")
const app = express()
const bcrypt = require('bcrypt');
const { mongoConnect, User } = require("./mongo");
const { log } = require("console");
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000
app.use(express.json())
app.use(bodyParser.json());
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

mongoConnect();
let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    req.customData = {
        roll: req.body.roll
      };
    res.render('login')
})
app.get('/adminlogin',  (req, res) => {
    
    res.render('adminlogin');
});
app.get('/admin',  (req, res) => {
    res.render('admin');
});

app.post('/addSubject', async (req, res) => {
   
    
        const sub = new User({
            roll: req.body.roll,
            subject : req.body.subject,
            
        })
    
        console.log(req.body.subject)
        console.log(req.body.roll)
        try {
            const checking = await User.findOne({ roll: req.body.roll })
            // const subs = await User.findOne({ subject: req.body.subject })
            if (checking && checking.subject!=req.body.subject) {
                await User.insertMany({roll:req.body.roll,subject:req.body.subject})
                res.json("success")
            }
            else {
                // await data.save()
                // res.status(201).render("home", {
                //     naming: req.body.name
                // })
                res.json("unsuccess")
                
            }
    
        }
        catch (err) {
            console.log(err);
            // res.render("signup")
        }
    
  });

  app.post('/todos', (req, res) => {
    const { text,username } = req.body;
    const newTodo = {
      id: Date.now(),
      text,
      username,
      completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
  
  app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.status(200).json({ message: 'Todo deleted successfully' });
  });


  app.post('/updateMarks', async (req, res) => {
    try {
      const student = await User.findOne({roll: req.body.roll,subject:req.body.subject});
      
    //   const subs = await User.findOne({ student.subject: req.body.subject })
    // console.log(student.subject)
    
      if (!student || student.subject!=req.body.subject) {
        res.json('notsuccess');
      }
      
        
    //   student.marks = marks;
    else{
        await User.updateOne({roll: req.body.roll, subject:req.body.subject},{$set: {marks:req.body.marks}})
        res.json('success');
    }
    //   let updates = await User.updateOne({roll: req.body.roll, subject:req.body.subject},{$set: {marks:marks}})
    //   await student.save();
    // if(!updates){
    //     res.json('notsuccess');
    // }
    // else{
    //     res.json('success');
    // }
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

app.post('/signup', async (req, res) => {

    const hash = await bcrypt.hash(req.body.pass, 10)

    const data = new User({
        roll: req.body.name,
        password: hash,
        name : req.body.roll
    })
    studName=req.body.roll;
    // console.log(req.body.name)
    // console.log(req.body.pass)
    try {
        const checking = await User.findOne({ roll: req.body.name })
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
        //   console.log(token)
        res.status(200).json({ token });
    } else {
        res.json('notexist');
    }
});


  app.get('/data', async (req, res) => {
    try {
        
      const data = await User.find();
      // console.log(data)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  


  // app.get('/profile', isAuthenticated, (req, res) => {
  //   // Access roll number from token stored in memory
  //   const token = req.headers.authorization.split(' ')[1];
  //   console.log("work")
  //   const rollNo = rollNumbers[token];
  //   if (!rollNo) return res.status(404).json({ message: 'Roll number not found' });
  
  //    res.json({ rollNo });
  // });

  var rollNumbers="";
  var studName="";
  app.get('/profile', async (req, res) => {
    try {
        var roll =  rollNumbers;
        var name=studName;
      res.status(200).json({roll:roll,name:name});
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/marks',async(req,res)=>{
  try {
    var roll =  rollNumbers;
    var name=studName;
    var mark=await User.find({roll:rollNumbers})
  
  res.status(200).json({mark});
} catch (error) {
  res.status(500).json({ error: 'Internal server error' });
}
});


app.post('/login', async (req, res) => {
  try {
    // console.log( req.body.name);
    const checking = await User.findOne({ roll: req.body.name })
    // console.log(req.body.password);
    // console.log(checking.password);
  
  
    
    try {
      if(checking){
        const result = await bcrypt.compare(req.body.password, checking.password);
        if (result) {
            const token = jwt.sign({ roll: req.body.name }, "secret");
            rollNumbers = req.body.name;
            
         
            res.json({ token ,rollNumbers});

            // res.json(req.body.roll)
           
            // res.json("exists")
            // req.session.user=true;
            // res.render("home",{naming:req.body.name});
        }
        else
            res.json("notexist");
      }
    }
    catch (e) {

        // res.redirect("/login");
        console.log(e)


    }
  }
  catch(e){
    console.log(e);
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