const CError = require('../errors/CommonError');

const trainService = require('../services/trains.service');

module.exports = {
    isTrainPresent: async (req, res, next) => {
        try {
            const {id} = req.params
            const train = await trainService.findTrain({_id: id})
            if (!train) {
                return next(new CError('Train not found'))
            }

            req.train = train;
            next()
        } catch (e) {
            next(e)
        }
    },
    isTrainUnique: async (req, res, next) => {
        try {
            const {name} = req.body;

            const train = await trainService.findTrain({name})
            if (train) {
                return next(new CError(`Train with name ${name} already exists`, 409))
            }

            req.train = train;
            next()
        } catch (e) {
            next(e)
        }
    }
}
