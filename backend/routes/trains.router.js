const trainsRouter = require("express").Router()

const {commonMiddleware, trainMiddleware}= require('../middlewares')
const {trainsValidator} = require('../validators')
const trainsController = require('../controllers/trains.controller')

trainsRouter.get('/',
    commonMiddleware.isDateValid(trainsValidator.findAll, 'query'),
    trainsController.getTrains)

trainsRouter.get('/:id',
    commonMiddleware.isIdValid,
    trainMiddleware.isTrainPresent,
    trainsController.getTrain)

trainsRouter.post('/',
    commonMiddleware.isDateValid(trainsValidator.newTrain),
    trainMiddleware.isTrainUnique,
    trainsController.postTrain)

trainsRouter.put('/:id',
    commonMiddleware.isIdValid,
    commonMiddleware.isDateValid(trainsValidator.updateTrain),
    trainMiddleware.isTrainPresent,
    trainsController.updateTrain)

trainsRouter.delete('/:id',
    commonMiddleware.isIdValid,
    trainMiddleware.isTrainPresent,
    trainsController.deleteTrain)

module.exports = trainsRouter;
