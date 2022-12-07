const {Schema, model} = require('mongoose');

const TrainSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    kind: {
        type: String
    }
}, {timestamps: true});

module.exports = model('train', TrainSchema);
