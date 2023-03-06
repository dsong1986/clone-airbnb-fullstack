const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.SERVER_PORT || 3005;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const User = require("./model/user")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}));



mongoose.set('strictQuery', true);

// MongoDB DB
const uri = "mongodb+srv://ststns:Dong1986@cluster0.8jcmsc0.mongodb.net/airbnb?retryWrites=true&w=majority"
mongoose.connect(uri);
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

app.listen(port, () => console.log(`Listening on port ${port}`));
