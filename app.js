const path = require('path');
const cors = require('cors');

const express = require('express');

const app = express();
const dotenv = require('dotenv');

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();

const signup = require('./routes/signup');
const chats = require('./routes/chats');
const sequelize = require('./util/database');
const SignUp = require('./models/signup');
const Chats = require('./models/chats');
const Usergroup = require('./models/usergroup');
const Group = require('./models/group');

app.use(cors());

app.use(signup);

app.use(chats);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, `public/${req.url}`));
});

sequelize.authenticate().then(() => {
    console.log('CONNECTION DONE');
}).catch((err) => {
    console.log(err);
});

SignUp.hasMany(Chats);
Chats.belongsTo(SignUp);

SignUp.belongsToMany(Group, {through: Usergroup});
Group.belongsToMany(SignUp, {through: Usergroup});

sequelize.sync()
.then(() => {
    console.log('CREATE TABLE');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});
