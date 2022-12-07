const schedulesRouter = require("express").Router()

// const {commonMiddleware, fileMiddleware, clientMiddleware}= require('../middlewares')
// const {clientValidator, queryValidator} = require('../validators')
const schedulesController = require('../controllers/schedules.controller')

schedulesRouter.get('/',
    // commonMiddleware.isDateValid(queryValidator.findAll, 'query'),
    schedulesController.getSchedules)

schedulesRouter.get('/:id',
    // commonMiddleware.isIdValid,
    // clientMiddleware.isClientPresent,
    schedulesController.getSchedule)

schedulesRouter.post('/',
    // commonMiddleware.isDateValid(clientValidator.newClientValidator),
    // fileMiddleware.checkClientAvatar,
    // clientMiddleware.isClientUnique,
    schedulesController.postSchedule)

schedulesRouter.put('/:id',
    // commonMiddleware.isIdValid,
    // fileMiddleware.checkClientAvatar,
    // commonMiddleware.isDateValid(clientValidator.updateClientValidator),
    // clientMiddleware.isClientPresent,
    schedulesController.updateSchedule)

schedulesRouter.delete('/:id',
    // commonMiddleware.isIdValid,
    // clientMiddleware.isClientPresent,
    schedulesController.deleteSchedule)

module.exports = schedulesRouter;
