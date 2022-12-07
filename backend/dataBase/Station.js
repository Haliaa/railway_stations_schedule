const {Schema, model} = require('mongoose');

const StationSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    platforms: {
        type: Number,
        require: true,
        trim: true
    }
}, {timestamps: true});

module.exports = model('station', StationSchema);
