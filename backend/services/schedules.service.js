const Schedule = require('../dataBase/Schedule');

module.exports = {
    findSchedules: (params = {}) => {
        return Schedule.find(params)
    },
    findSchedule: (params = {}) => {
        return Schedule.findOne(params)
    },
    createSchedule: (trainSchedule) => {
        return Schedule.create(trainSchedule)
    },
    updateSchedule: (params, trainScheduleData, options = {new: true}) => {
        return Schedule.findOneAndUpdate(params, trainScheduleData, options)
    },
    deleteSchedule: (params) => {
        return Schedule.deleteOne(params)
    }
}
