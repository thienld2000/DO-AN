const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const db = require("./db");


const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');  
const khuyenMaiRouter = require('./routes/khuyenmaiRouter');
const tableRouter = require('./routes/tableRouter');


const app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'Mongoose Db connection error'));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Yakimono-ordering" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use('/api', productRouter);
app.use('/api/order', orderRouter);
app.use('/api', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/khuyen_mai', khuyenMaiRouter);
app.use('/api/table', tableRouter);
