const Station = require('../dataBase/Station');

module.exports = {
    findStations: (params = {}) => {
        return Station.find(params)
    },
    findStation: (params = {}) => {
        return Station.findOne(params)
    },
    createStation: (station) => {
        return Station.create(station)
    },
    updateStation: (params, stationData, options = {new: true}) => {
        return Station.findOneAndUpdate(params, stationData, options)
    },
    deleteStation: (params) => {
        return Station.deleteOne(params)
    }
}
