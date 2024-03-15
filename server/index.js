const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');

const db = require("./db");
const productRouter = require('./routes/productRouter');

const app = express();


var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.on('error', console.error.bind(console,'Mongoose Db connection error'));
app.get('/', (req,res) => {
    res.json({message:"wellcome to Yakimono-ordering"})
});

const PORT = process.env.PORT ||8000;

app.listen(PORT, () => {
    console.log(`listening on port${PORT}`);
})      
app.use('/api/',productRouter);