const schedulesRouter = require("express").Router()

const {commonMiddleware, scheduleMiddleware}= require('../middlewares')
const {schedulesValidator} = require('../validators')
const schedulesController = require('../controllers/schedules.controller')

schedulesRouter.get('/',
    commonMiddleware.isDateValid(schedulesValidator.findAll, 'query'),
    schedulesController.getSchedules)

schedulesRouter.get('/:id',
    commonMiddleware.isIdValid,
    scheduleMiddleware.isSchedulePresent,
    schedulesController.getSchedule)

schedulesRouter.post('/',
    commonMiddleware.isDateValid(schedulesValidator.newSchedule),
    schedulesController.postSchedule)

schedulesRouter.put('/:id',
    commonMiddleware.isIdValid,
    commonMiddleware.isDateValid(schedulesValidator.updateSchedule),
    scheduleMiddleware.isSchedulePresent,
    schedulesController.updateSchedule)

schedulesRouter.delete('/:id',
    commonMiddleware.isIdValid,
    scheduleMiddleware.isSchedulePresent,
    schedulesController.deleteSchedule)

module.exports = schedulesRouter;
