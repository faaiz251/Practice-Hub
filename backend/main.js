import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import User from './db/index.js'

const app = express();


const port = 3000;

const SECRET = 'SECr3t';
app.use(cors());
app.use(express.json());


app.use(bodyParser.json())


const Signup = async(req,res) =>  {

    const {username,password} = req.body;
    const user= await User.findOne({username});

    if(user) {
        res.status(403).send("User Already Existed");
    }

    else {
        const newuser = new User({username , password});
        await newuser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
         res.status(201).json({ message: 'User created successfully', token });
   }
}

const Signin = async(req,res) => {
    const {username,password} = req.body;
    const user= await User.findOne({username , password});

    if(user) {
         const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
         res.status(201).json({ message: 'Logged in successfully', token });
    }
     else {
        res.status(403).send("Invalid username or password");
     }
}

app.post('/signup', Signup);
app.post("/signin", Signin);


function started() {
    console.log(`Example app listening on port ${port}`);
}


app.listen(port, started);

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "practice-hub" });
