const stationsService = require('../services/stations.service')

module.exports = {
    getStations: async (req, res, next) => {
        try {
            const trains = await stationsService.findStations(req.query).exec();

            res.status(201).json(trains);
        } catch (e) {
            next(e)
        }
    },

    getStation: async (req, res, next) => {
        try {
            const {id} = req.params;

            const train = await stationsService.findStation({_id: id}).exec();

            res.status(201).json(train)
        } catch (e) {
            next(e)
        }
    },

    postStation: async (req, res, next) => {
        try {
            const train = await stationsService.createStation({...req.body});

            res.status(201).json(train);
        } catch (e) {
            next(e)
        }
    },

    updateStation: async (req, res, next) => {
        try {
            const {id} = req.params;

            const updatedTrain = await stationsService.updateStation({_id: id}, req.body);

            res.status(201).json(updatedTrain);
        } catch (e) {
            next(e)
        }
    },

    deleteStation: async (req, res, next) => {
        try {
            const {id} = req.params;

            await stationsService.deleteStation({_id: id});

            res.sendStatus(204);
        } catch (e) {
            next(e)
        }
    }
}
