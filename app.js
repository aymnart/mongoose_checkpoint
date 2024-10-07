const express=require("express");
const app=express();
const port = 3001;
const connectDB = require('./config/ConnectDB');
app.use(express.json());
connectDB();


app.listen(port, (err) => {
    err? console.error(err): 
    console.log(`server running on http://localhost:${port}`);
});