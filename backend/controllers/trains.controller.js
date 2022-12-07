const trainsService = require('../services/trains.service')

module.exports = {
    getTrains: async (req, res, next) => {
        try {
            const trains = await trainsService.findTrains(req.query).exec();

            res.status(201).json(trains);
        } catch (e) {
            next(e)
        }
    },

    getTrain: async (req, res, next) => {
        try {
            const {id} = req.params;

            const train = await trainsService.findTrain({_id: id}).exec();

            res.status(201).json(train)
        } catch (e) {
            next(e)
        }
    },

    postTrain: async (req, res, next) => {
        try {
            const train = await trainsService.createTrain({...req.body});

            res.status(201).json(train);
        } catch (e) {
            next(e)
        }
    },

    updateTrain: async (req, res, next) => {
        try {
            const {id} = req.params;

            const updatedTrain = await trainsService.updateTrain({_id: id}, req.body);

            res.status(201).json(updatedTrain);
        } catch (e) {
            next(e)
        }
    },

    deleteTrain: async (req, res, next) => {
        try {
            const {id} = req.params;

            await trainsService.deleteTrain({_id: id});

            res.sendStatus(204);
        } catch (e) {
            next(e)
        }
    }
}
