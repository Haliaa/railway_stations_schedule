const CError = require('../errors/CommonError');

const stationService = require('../services/stations.service');

module.exports = {
    isStationPresent: async (req, res, next) => {
        try {
            const {id} = req.params
            const station = await stationService.findStation({_id: id})
            if (!station) {
                return next(new CError('Station not found'))
            }

            req.station = station;
            next()
        } catch (e) {
            next(e)
        }
    },
    isStationUnique: async (req, res, next) => {
        try {
            const {name} = req.body;

            const station = await stationService.findStation({name})
            if (station) {
                return next(new CError(`Station with name ${name} already exists`, 409))
            }

            req.station = station;
            next()
        } catch (e) {
            next(e)
        }
    }
}
