const Train = require('../dataBase/Train');

module.exports = {
    findTrains: (params = {}) => {
        return Train.find(params)
    },
    findTrain: (params = {}) => {
        return Train.findOne(params)
    },
    createTrain: (train) => {
        return Train.create(train)
    },
    updateTrain: (params, trainData, options = {new: true}) => {
        return Train.findOneAndUpdate(params, trainData, options)
    },
    deleteTrain: (params) => {
        return Train.deleteOne(params)
    }
}
