const express = require('express');
const app = express(); 
const cors = require("cors");
const mongoDB = require("./configs/mongo.db");

require("dotenv").config();
const PORT = process.env.PORT || 8003;

mongoDB.connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    return res.status(200).json({"msg": "Hello from Statue"});
});

app.listen(PORT, () => {
    console.log(`Products is Listening to Port ${PORT}`);
});
