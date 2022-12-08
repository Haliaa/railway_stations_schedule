require('dotenv').config();

const express = require('express');
const expressFileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const cors = require('cors');

const {PORT, MONGO_URL} = require('./constants/configs');
const {stationsRouter, trainsRouter, schedulesRouter} = require('./routes')

mongoose.connect(MONGO_URL).then(() => {
    console.log('MongoDB connected!!!');
}).catch(err => {
    console.log('Something went wrong');
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressFileUpload());

app.use(cors());
app.use('/trains', trainsRouter);
app.use('/stations', stationsRouter);
app.use('/schedules', schedulesRouter);

app.use((err, req, res, next) => {
    console.log(err)
    res
        .status(err.status || 400)
        .json({
            error: err.message || 'Unknown error',
            code: err.status || 400
        })
});

app.use('*', (req, res) => {
    res.status(404).json('Route not found')
});

app.listen(PORT, () => {
    console.log(`Backend is listening ${PORT} port...`)
});
