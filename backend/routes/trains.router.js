const trainsRouter = require("express").Router()

// const {commonMiddleware, fileMiddleware, clientMiddleware}= require('../middlewares')
// const {clientValidator, queryValidator} = require('../validators')
const trainsController = require('../controllers/trains.controller')

trainsRouter.get('/',
    // commonMiddleware.isDateValid(queryValidator.findAll, 'query'),
    trainsController.getTrains)

trainsRouter.get('/:id',
    // commonMiddleware.isIdValid,
    // clientMiddleware.isClientPresent,
    trainsController.getTrain)

trainsRouter.post('/',
    // commonMiddleware.isDateValid(clientValidator.newClientValidator),
    // fileMiddleware.checkClientAvatar,
    // clientMiddleware.isClientUnique,
    trainsController.postTrain)

trainsRouter.put('/:id',
    // commonMiddleware.isIdValid,
    // fileMiddleware.checkClientAvatar,
    // commonMiddleware.isDateValid(clientValidator.updateClientValidator),
    // clientMiddleware.isClientPresent,
    trainsController.updateTrain)

trainsRouter.delete('/:id',
    // commonMiddleware.isIdValid,
    // clientMiddleware.isClientPresent,
    trainsController.deleteTrain)

module.exports = trainsRouter;
