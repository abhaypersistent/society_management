const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./models");

const app = express();

var corsOption = {
    origin: 'http://localhost:3031'
};

app.use(cors(corsOption));

app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded());

app.get('/',(req,res) => {
    res.json({message:'Welcome to our dummy site'});
})

const port = process.env.PORT || 8000;

console.log(db.url);
// return false;
db.mongoose.set("strictQuery", false);
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    app.listen(port, ()=>{
        console.log('server is running');
    });
}).catch(err => {
    console.log(err);
    console.log("cannot able to connect to the database");
})


