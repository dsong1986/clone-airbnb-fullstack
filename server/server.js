const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.SERVER_PORT || 3005;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const User = require("./model/user")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
dotenv.config()

const jwtSecret='dshjfisdhfiue'
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser())


// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_CONNECT_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});



app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));


app.get("/test", (req, res) => {
    res.json('test ok')
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10)

        const hashedPass = await bcrypt.hash(password, salt)

        const newUser = new User({
            username: name,
            email: email,
            password: hashedPass,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {

        res.status(500).json(error)
    }
})

app.post('/login', async(req, res) =>{
    try {
        const user = await User.findOne({ email: req.body.email })
        //if no user
        if(!user)   res.status(400).json("User not exist!")
    
        //if same user then compare password
        else{
            const validate = await bcrypt.compare(req.body.password, user.password)
        
            //if not validate
           if(!validate) res.status(400).json("Wrong Password!")
            else{
                //send everything but password back 
                const { password, ...other } = user._doc
                // res.status(200).json(other)
                jwt.sign({
                    email:user.email, 
                    id:user._id,
                    name:user.username}, jwtSecret, {}, (err,token) => {
                        if(err) throw err;
                        res.cookie('token', token).json(other)
                    })
            }
        }
      } catch (error) {
        res.status(500).json(error)
      }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if(err) throw err;
            const {username, email, _id} = await User.findById(userData.id);
            res.json({username, email, _id});
        })
    }else{
        res.json(null)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
