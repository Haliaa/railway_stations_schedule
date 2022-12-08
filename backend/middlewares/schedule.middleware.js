const CError = require('../errors/CommonError');
const scheduleService = require('../services/schedules.service');

module.exports = {
    isSchedulePresent: async (req, res, next) => {
        try {
            const {id} = req.params
            const schedule = await scheduleService.findSchedule({_id: id})
            if (!schedule) {
                return next(new CError('Schedule not found'))
            }

            req.schedule = schedule;
            next()
        } catch (e) {
            next(e)
        }
    }
}
