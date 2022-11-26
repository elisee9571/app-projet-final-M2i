const express = require("express");
const session = require("express-session");
const app = express();

app.use(session({ secret: "secret", saveUninitialized: false, resave: false }));
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