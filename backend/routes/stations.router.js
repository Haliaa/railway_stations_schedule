const stationsRouter = require("express").Router()

const {commonMiddleware, stationMiddleware}= require('../middlewares')
const stationsController = require('../controllers/stations.controller')
const {stationsValidator} = require("../validators");

stationsRouter.get('/',
    commonMiddleware.isDateValid(stationsValidator.findAll, 'query'),
    stationsController.getStations)

stationsRouter.get('/:id',
    commonMiddleware.isIdValid,
    stationMiddleware.isStationPresent,
    stationsController.getStation)

stationsRouter.post('/',
    commonMiddleware.isDateValid(stationsValidator.newStation),
    stationMiddleware.isStationUnique,
    stationsController.postStation)

stationsRouter.put('/:id',
    commonMiddleware.isIdValid,
    commonMiddleware.isDateValid(stationsValidator.updateStation),
    stationMiddleware.isStationPresent,
    stationsController.updateStation)

stationsRouter.delete('/:id',
    commonMiddleware.isIdValid,
    stationMiddleware.isStationPresent,
    stationsController.deleteStation)

module.exports = stationsRouter;
