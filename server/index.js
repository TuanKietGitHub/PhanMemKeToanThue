const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const DmRouter = require('./routes/DmRouter');


const app = express()

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/dm' , DmRouter);


app.listen(config.port , () => {
    console.log(`Server on started http://localhost:${config.port}`)
})




























