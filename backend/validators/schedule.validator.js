const Joi = require("joi")

const {timeValidator, platformValidator, idValidator, stopValidator} = require('../validators/common.validator')

module.exports = {
    findAll: Joi.object({
        arrival: timeValidator.required(),
        departure: timeValidator.required(),
        stop: stopValidator,
        platform: platformValidator.required(),
        trainId: idValidator.required(),
        stationId: idValidator.required()
    })
}
