const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

const userRouter = require('./routes/User.route');
const adRouter = require('./routes/Ad.route');

app.use('/api/user', userRouter);
app.use('/api/ad', adRouter);

const APP_URL = "http://localhost:";
const PORT = 8000;
app.listen((APP_URL, PORT), () => {
    console.log(`app listening on ${APP_URL}${PORT}`);
});