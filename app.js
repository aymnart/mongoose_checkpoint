const express=require("express");
const app=express();
const port = 3001;
const person = require('./models/person')
const connectDB = require('./config/ConnectDB');

app.use(express.json());

connectDB();


const NewPerson = new person({
    name : 'Aymen',
    email : 'aymen@gmail.com',
    age:23,
    favoriteFoods : ['pizza','crépe','croissant'],
})


NewPerson.save()
.then(result=>console.log(result))
.catch(error=>console.error(error));



app.listen(port, (err) => {
    err? console.error(err): 
    console.log(`server running on http://localhost:${port}`);
});