const stationsRouter = require("express").Router()

// const {commonMiddleware, fileMiddleware, clientMiddleware}= require('../middlewares')
// const {clientValidator, queryValidator} = require('../validators')
const stationsController = require('../controllers/stations.controller')

stationsRouter.get('/',
    // commonMiddleware.isDateValid(queryValidator.findAll, 'query'),
    stationsController.getStations)

stationsRouter.get('/:id',
    // commonMiddleware.isIdValid,
    // clientMiddleware.isClientPresent,
    stationsController.getStation)

stationsRouter.post('/',
    // commonMiddleware.isDateValid(clientValidator.newClientValidator),
    // fileMiddleware.checkClientAvatar,
    // clientMiddleware.isClientUnique,
    stationsController.postStation)

stationsRouter.put('/:id',
    // commonMiddleware.isIdValid,
    // fileMiddleware.checkClientAvatar,
    // commonMiddleware.isDateValid(clientValidator.updateClientValidator),
    // clientMiddleware.isClientPresent,
    stationsController.updateStation)

stationsRouter.delete('/:id',
    // commonMiddleware.isIdValid,
    // clientMiddleware.isClientPresent,
    stationsController.deleteStation)

module.exports = stationsRouter;
