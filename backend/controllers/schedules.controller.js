const schedulesService = require('../services/schedules.service')

module.exports = {
    getSchedules: async (req, res, next) => {
        try {
            const schedules = await schedulesService.findSchedules(req.query).exec();

            res.status(201).json(schedules);
        } catch (e) {
            next(e)
        }
    },

    getSchedule: async (req, res, next) => {
        try {
            const {id} = req.params;

            const schedule = await schedulesService.findSchedule({_id:id}).exec();

            res.status(201).json(schedule)
        } catch (e) {
            next(e)
        }
    },

    postSchedule: async (req, res, next) => {
        try {
            const schedule = await schedulesService.createSchedule({...req.body});

            res.status(201).json(schedule);
        } catch (e) {
            next(e)
        }
    },

    updateSchedule: async (req, res, next) => {
        try {
            const {id} = req.params;

            const updatedSchedule = await schedulesService.updateSchedule({_id: id}, req.body);

            res.status(201).json(updatedSchedule);
        } catch (e) {
            next(e)
        }
    },

    deleteSchedule: async (req, res, next) => {
        try {
            const {id} = req.params;

            await schedulesService.deleteSchedule({_id: id});

            res.sendStatus(204);
        } catch (e) {
            next(e)
        }
    }
}
