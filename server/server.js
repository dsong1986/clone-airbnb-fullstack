const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.SERVER_PORT || 3005;

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));


app.get("/test", (req, res) => {
    res.json('test ok')
});

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    // console.log('inside register');
    res.json({name, email,password})
    // res.json('post request')
})

app.listen(port, () => console.log(`Listening on port ${port}`));
