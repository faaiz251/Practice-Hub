import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import { User } from "./db/mongo.js";
import authenticateJwt from "./middleware/middleware.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = 3001;

const SECRET = "SECr3t";
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

const Signup = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    res.status(403).send("User Already Existed");
  } else {
    const newuser = new User({ username, password });
    await newuser.save();
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User created successfully", token });
  }
};

const Signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "Logged in successfully", token });
  } else {
    res.status(403).send("Invalid username or password");
  }
};

const problems = async (req, res) => {
  Problem.find().then((problems) => {
    if (problems.length !== 0) res.status(200).json(problems);
    else {
      res.send("No Content found!!");
    }
  });
};

const cronjob = async(req,res)=>{
  res.status(200).send("Hi to cron job from server")
}

app.post("/signup", Signup);
app.post("/signin", Signin);
app.get("/content", authenticateJwt, problems);
app.get("/cronjob",cronjob);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "practice-hub",
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

