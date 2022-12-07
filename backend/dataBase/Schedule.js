const {Schema, model} = require('mongoose');

const ScheduleSchema = new Schema({
    arrival: {
        type: String,
        require: true,
        trim: true
    },
    departure: {
        type: String,
        require: true,
        trim: true
    },
    stop: {
        type: String,
        require: true
    },
    platform: {
        type: Number,
        trim: true
    },
    trainId: {
        type: Schema.Types.ObjectId,
        ref: 'train',
        require: true
    },
    stationId: {
        type: Schema.Types.ObjectId,
        ref: 'station',
        require: true
    },
}, {timestamps: true});

module.exports = model('schedule', ScheduleSchema);
