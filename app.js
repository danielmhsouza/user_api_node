const express = require('express');
const userRoutes = require('./src/routes/users');
// const databaseConfig = require('./config/database');
// mongoose.connect(databaseConfig.url, {userNewParser: true});
const port = 3000;

const app = express();

app.use(express.json());
app.use('/user/', userRoutes);

app.listen(port, ()=>{console.log(`Running: http://localhost:${port}`)});